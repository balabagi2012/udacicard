import { SET_QUIZ_TITLE, SHOW_ANSWER, HIDE_ANSWER, UPDATE_SCORE, UPDATE_CARD_INDEX, SET_QUIZ_TO_COMPLETE, RESET_QUIZ} from '../actions/questions';

const initialQuizState = {
    currentCardIndex: 0,
    score: 0,
    showAnswer: false,
    complete: false
};

export default function questions (state = initialQuizState, action) {
    switch (action.type) {
      case SET_QUIZ_TITLE :
        return {
          ...state,
          title: action.title
        }
      case SHOW_ANSWER :
        return {
          ...state,
          showAnswer: true
        }
      case HIDE_ANSWER :
        return {
          ...state,
          showAnswer: false
        }
      case UPDATE_CARD_INDEX :
        return {
          ...state,
          currentCardIndex: action.cardIndex
        }
      case UPDATE_SCORE :
        return {
          ...state,
          score: action.score
        }
      case SET_QUIZ_TO_COMPLETE :
        return {
          ...state,
          complete: true
        }
      case RESET_QUIZ :
        return {
          ...state,
          ...initialQuizState
        }
      default:
        return state;
    }
  }
  