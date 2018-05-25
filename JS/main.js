var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

// Create cardOne to show as the first card the user flipped
var cardOne = cards[0];
// Add the card to the array of cards that are in use
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

// Create cardTwo to show the second card the user flipped
var cardTwo = cards[2];
// Add the card to the array of cards that are in use
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);


// Checks to see if cards have been used
if (cardsInPlay.length === 2) {

  // Verify match and user response
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}