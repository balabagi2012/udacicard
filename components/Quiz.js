import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import {
  showAnswer,
  hideAnswer,
  updateCardIndex,
  updateScore,
  setQuizToComplete,
  resetQuiz,
} from "../actions/questions";
import QuizStatusBar from "./QuizStatusBar";
import QuizCard from "./QuizCard";
import QuizButtons from "./QuizButtons";
import QuizComplete from "./QuizComplete";
import { white } from "../utils/colors";

class Quiz extends Component {
  componentDidMount() {
    this.props.dispatch(resetQuiz());
  }

  handleShowAnswer = () => {
    this.props.dispatch(showAnswer());
  };

  handleCorrect = () => {
    this.props.dispatch(updateScore(this.props.score + 1));
    this.updateQuizStatus();
    this.props.dispatch(hideAnswer());
  };

  handleIncorrect = () => {
    this.updateQuizStatus();
    this.props.dispatch(hideAnswer());
  };

  updateQuizStatus = () => {
    const { deck, currentCardIndex } = this.props;

    if (currentCardIndex < deck.cards.length - 1) {
      this.props.dispatch(updateCardIndex(currentCardIndex + 1));
    } else {
      this.props.dispatch(setQuizToComplete());
    }
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: `Quiz: ${this.props.route.params.title}`,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.quizComplete ? (
          <QuizComplete navigation={this.props.navigation} />
        ) : (
          <View style={styles.quizContainer}>
            <QuizStatusBar />
            <QuizCard />
            <QuizButtons
              handleShowAnswer={this.handleShowAnswer}
              handleCorrect={this.handleCorrect}
              handleIncorrect={this.handleIncorrect}
              updateQuizStatus={this.updateQuizStatus}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
  },
  quizContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    deck: state.decks[state.questions.title],
    currentCardIndex: state.questions.currentCardIndex,
    quizComplete: state.questions.complete,
    score: state.questions.score,
  };
}

export default connect(mapStateToProps)(Quiz);
