console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Ross Geller',
    hand: [],
    handValuesInitial: [],
    handValuesFlattened: [],
    points: 0
  },
  {
    name: 'Rachel Green',
    hand: [],
    handValuesInitial: [],
    handValuesFlattened: [],
    points: 0
  },
  {
    name: 'Joey Tribbiani',
    hand: [],
    handValuesInitial: [],
    handValuesFlattened: [],
    points: 0
  },
  {
    name: 'Chandler Bing',
    hand: [],
    handValuesInitial: [],
    handValuesFlattened: [],
    points: 0
  }];

var pointsArray = [];

// create deck of 52 cards
var cardDeck = [];
var card = {};
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var numbers = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var k = 0;

function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      var cardKeyValuePair = [
        [suits[i], numbers[j]]
      ];
      card = Object.fromEntries(cardKeyValuePair);
      cardDeck[k] = card;
      if (k <= 51) {
        k++;
      }

    }
  }
  return cardDeck;
}

createDeck();
console.log('original deck:', cardDeck);

// shuffle the cardDeck
var shuffledDeck = cardDeck;
function shuffle(shuffledDeck) {
  var currentIndex = shuffledDeck.length;
  var shuffleIndex;

  while (currentIndex !== 0) {
    shuffleIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffledDeck[currentIndex], shuffledDeck[shuffleIndex]] = [shuffledDeck[shuffleIndex], shuffledDeck[currentIndex]];
  }

  return shuffledDeck;

}

shuffle(shuffledDeck);
console.log('shuffled deck:', shuffledDeck);

// deal 2 cards to each player
for (var n = 0; n < players.length; n++) {
  for (var m = 0; players[n].hand.length < 2; m++) {
    var dealCard = cardDeck.pop();
    players[n].hand.push(dealCard);

    players[n].handValuesInitial.push(Object.values(players[n].hand[m]));
    players[n].handValuesFlattened = _.flatten(players[n].handValuesInitial);

    for (var p = 0; p < players[n].handValuesFlattened.length; p++) {
      if (players[n].handValuesFlattened[p] === 'ace') {
        players[n].handValuesFlattened[p] = 11;
      } else if (players[n].handValuesFlattened[p] === 'jack') {
        players[n].handValuesFlattened[p] = 10;
      } else if (players[n].handValuesFlattened[p] === 'queen') {
        players[n].handValuesFlattened[p] = 10;
      } else if (players[n].handValuesFlattened[p] === 'king') {
        players[n].handValuesFlattened[p] = 10;
      }
    }

    // find max of all points
    // console log winner
  }
  players[n].points = _.sum(players[n].handValuesFlattened);

  pointsArray.push(players[n].points);

}
console.log('Cards dealt:', players);
console.log('pointsArray', pointsArray);

var winner = _.max(pointsArray);
for (var r = 0; r < players.length; r++) {
  if (pointsArray[r] === winner) {
    console.log('Winner is:', players[r].name);
  }
}
