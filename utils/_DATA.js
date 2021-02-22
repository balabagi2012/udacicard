import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_KEY = "DATA";

export const fakeDecksData = {
  Deck1: {
    title: "Deck1",
    cards: [
      {
        questionText: "Deck 1 Q1?",
        answerText: "A1",
      },
      {
        questionText: "Deck 1 Q2?",
        answerText: "A2",
      },
    ],
  },
  Deck2: {
    title: "Deck2",
    cards: [
      {
        questionText: "Deck 2 Q1?",
        answerText: "A3",
      },
    ],
  },
};

export function InitializeDataStorage() {
  AsyncStorage.getItem(DATA_KEY).then((res) => {
    if (!res) {
      AsyncStorage.mergeItem(DATA_KEY, JSON.stringify(fakeDecksData));
    }
  });
}

export function getDecks() {
  return AsyncStorage.getItem(DATA_KEY).then((res) => {
    return JSON.parse(res);
  });
}

export function setDecks(decks) {
  return AsyncStorage.setItem(DATA_KEY, JSON.stringify(decks)).then((res) => {
    return JSON.parse(res);
  });
}

export function createDeck(title) {
  return AsyncStorage.mergeItem(
    DATA_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        cards: [],
      },
    })
  );
}

export function createCard(deckTitle, card) {
  AsyncStorage.getItem(DATA_KEY, (err, result) => {
    const decks = JSON.parse(result);

    decks[deckTitle].cards.push(card);

    const cards = decks[deckTitle].cards;

    return AsyncStorage.mergeItem(
      DATA_KEY,
      JSON.stringify({
        [deckTitle]: {
          title: deckTitle,
          cards: cards,
        },
      })
    );
  });
}
