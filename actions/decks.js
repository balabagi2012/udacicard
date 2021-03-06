export const LOAD_DECKS = "LOAD_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_DECK = "REMOVE_DECK";

export function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function removeDeck(deck) {
  return {
    type: REMOVE_DECK,
    deck,
  };
}

export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  };
}
