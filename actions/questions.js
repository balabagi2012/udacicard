export const SET_QUIZ_TITLE = 'SET_QUIZ_TITLE';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const HIDE_ANSWER = 'HIDE_ANSWER';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_CARD_INDEX = 'UPDATE_CARD_INDEX';
export const SET_QUIZ_TO_COMPLETE = 'SET_QUIZ_TO_COMPLETE';
export const RESET_QUIZ = 'RESET_QUIZ';

export function setQuizTitle (title) {
  return {
    type: SET_QUIZ_TITLE,
    title
  }
}

export function showAnswer () {
    return {
      type: SHOW_ANSWER
    }
}
  
export function hideAnswer () {
    return {
      type: HIDE_ANSWER
    }
}
  
export function updateCardIndex (cardIndex) {
    return {
      type: UPDATE_CARD_INDEX,
      cardIndex
    }
}
  
export function updateScore (score) {
    return {
      type: UPDATE_SCORE,
      score
    }
}
  
export function setQuizToComplete () {
    return {
      type: SET_QUIZ_TO_COMPLETE
    }
}
  
  
export function resetQuiz () {
    return {
      type: RESET_QUIZ
    }
}
  