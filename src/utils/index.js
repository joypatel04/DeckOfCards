const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

export const makeid = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getDeck = () => {
  const deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < values.length; x++) {
      var card = {
        value: values[x],
        suit: suits[i],
        id: makeid(5),
        drawn: false,
      };
      deck.push(card);
    }
  }
  return deck;
};

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const shuffleAndGetRandom = (deck, times) => {
  let newDeck = [...deck];
  if (newDeck.length) {
    for (var i = 0; i < 200; i++) {
      const location1 = Math.floor(Math.random() * newDeck.length);
      const location2 = Math.floor(Math.random() * newDeck.length);
      const tmp = newDeck[location1];

      newDeck[location1] = newDeck[location2];
      newDeck[location2] = tmp;
    }
  }

  for (let j = 0; j < times; j++) {
    const randomNum = randomNumber(0, deck.length);
    const card = newDeck[randomNum];
    if (card) {
      const filterdDeck = newDeck.map((item) => {
        if (item.id === card.id) {
          return {...item, drawn: true};
        }

        return item;
      });
      newDeck = filterdDeck;
    }
  }

  return newDeck;
};
