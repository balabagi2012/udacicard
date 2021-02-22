import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { setQuizTitle } from "../actions/questions";
import { getFormattedCards } from "../utils/helpers";
import { azureWhite } from "../utils/colors";
import Button from "./Button";

class Deck extends Component {
  static navigationOptions = ({ navigation, route }) => {
    return {
      title: route.params.params.title,
    };
  };

  handleNewDeck = () => {
    const { navigation, deck } = this.props;
    navigation.navigate("CreateNewCard", { title: deck.title });
  };

  handleQuizStart = () => {
    const { navigation, deck } = this.props;

    if (this.deckHasCards()) {
      this.props.dispatch(setQuizTitle(deck.title));
      navigation.navigate("Quiz", { title: deck.title });
    } else {
      navigation.navigate("CreateNewCard", { title: deck.title });
    }
  };

  deckHasCards = () => {
    return this.props.deck.cards.length > 0;
  };

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>
          {`This deck has ${getFormattedCards(deck.cards.length)}`}
        </Text>
        <Button onPress={this.handleNewDeck} text={"Create a New Card"} />
        {deck.cards.length === 0 ? (
          <Text style={styles.bodyText}>Please add cards first</Text>
        ) : (
          <Button onPress={this.handleQuizStart} text={"Start a Quiz"} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: azureWhite,
  },
  bodyText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
});

function mapStateToProps(state, { navigation, route }) {
  const title = route.params.title;
  return {
    deck: state.decks[title],
  };
}

export default connect(mapStateToProps)(Deck);


