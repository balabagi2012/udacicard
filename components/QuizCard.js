import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { white } from '../utils/colors';
import QuizCardBack from './QuizCardBack';

class QuizCard extends Component {
  render() {
    const { deck, currentCardIndex, showAnswer } = this.props;
    const { questionText } = deck.cards[currentCardIndex];

    return (
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>
            {questionText}
          </Text>
        </View>
        <View style={styles.textContainer}>
          {showAnswer && (
            <QuizCardBack />
          )}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  },
  textContainer: {
    minHeight: 100,
    backgroundColor: white
  },
  cardText: {
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    alignSelf: 'center'
  }
});

function mapStateToProps (state) {
  return {
    deck: state.decks[state.questions.title],
    currentCardIndex: state.questions.currentCardIndex,
    showAnswer: state.questions.showAnswer,
  };
}

export default connect(mapStateToProps)(QuizCard);
