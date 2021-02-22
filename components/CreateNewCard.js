import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { createCard } from "../utils/_DATA";
import { addCard } from "../actions/decks";
import { white, black, azureWhite } from "../utils/colors";
import Button from "./Button";

class CreateNewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "New Question",
    };
  };

  state = {
    frontText: "",
    backText: "",
  };

  submitCard = () => {
    const { title } = this.props.route.params;

    createCard(title, this.state);
    this.props.dispatch(addCard(title, this.state));
    this.props.navigation.goBack();
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: "New Question",
    });
  }

  render() {
    return (
      <View style={styles.form}>
        <TextInput
          multiline={true}
          style={styles.textInput}
          value={this.state.questionsText}
          placeholder={"Enter your question"}
          onChangeText={(questionText) =>
            this.setState({ questionText: questionText })
          }
        />
        <TextInput
          multiline={true}
          style={styles.textInput}
          value={this.state.answerText}
          placeholder={"And your answer"}
          onChangeText={(answerText) => this.setState({ answerText })}
        />
        <Button onPress={this.submitCard} text={"Add Card"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: azureWhite,
  },
  textInput: {
    width: 260,
    height: 60,
    marginTop: 20,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    color: black,
    backgroundColor: white,
  },
});

export default connect()(CreateNewCard);
