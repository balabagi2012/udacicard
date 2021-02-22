import { fakeDecksData } from '../utils/_DATA';
import { LOAD_DECKS, ADD_DECK, ADD_CARD } from '../actions/decks';

export default function decks (state = fakeDecksData, action) {
    switch (action.type) {
        case LOAD_DECKS :
            return {
              ...state,
              ...action.decks
            }
        case ADD_DECK :
            return {
            ...state,
            ...action.deck
            }
        case ADD_CARD :
            return {
              ...state,
              [action.deckTitle]: {
                title: action.deckTitle,
                cards: [...state[action.deckTitle].cards, action.card]
              }
        }
        default:
            return state;
    }
  }