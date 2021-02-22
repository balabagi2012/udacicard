import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from "react-navigation";
import { black, white, azureWhite } from "../utils/colors";
import { addDeck } from "../actions/decks";
import Button from "./Button";
import { createDeck } from "../utils/_DATA";

class CreateNewDeck extends Component {
  static navigationOptions = {
    title: "Create Deck",
  };

  state = {
    text: "",
  };

  submitDeckTitle = () => {
    const deckTitle = this.state.text;

    createDeck(deckTitle);

    this.props.dispatch(
      addDeck({
        [deckTitle]: {
          title: deckTitle,
          cards: [],
        },
      })
    );

    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.textInstructions}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button onPress={this.submitDeckTitle} text={"Submit"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: azureWhite,
  },
  textInstructions: {
    width: 200,
    fontSize: 20,
  },
  textInput: {
    width: 200,
    height: 40,
    marginTop: 20,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 4,
    color: black,
    backgroundColor: white,
  },
});

export default connect()(CreateNewDeck);
