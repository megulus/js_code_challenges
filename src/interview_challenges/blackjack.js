/*
BEHAVIOR:
- dealer deals one face-up card to each player and him/herself
- dealer deals a second face-up card to each player, and a face-down card to him/herself
- in turn, players may hit (be dealt another card) until they go bust or decide to stand
- winner is player who gets closest (or equal) to 21 without going over
*/

/* 
CLASSES:

Deck of Cards Object
- methods: shuffle, deal (this method returns one card from the deck)

* Card Object (?)
- value, suit


Game Object
- constructor takes number of players
- tracks players in a list, which player's turn it is
- is dealer a special player, or just player 0?

Player Object
- can this object also be used to create a dealer?
- holds a hand of cards

Hand Object (specifically, a Blackjack Hand)
- value method (returns value - how to do this when one card is an ace?)
- show card method (marks a card in hand as visible)
*/

const SUITS = ['♠', '♥', '♣', '♦']

class Deck {

}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  getValue() {
    return this.value
  }

  getSuit() {
    return this.suit
  }
}