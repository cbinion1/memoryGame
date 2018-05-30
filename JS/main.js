var cards = [
	{
		card: 'queen',
		suit: 'hearts',
		cardImage: '/users/mac/fundamentals/memory_game/images/queen-of-hearts.png',
	}, 
	{
		card: 'queen',
		suit: 'diamonds',
		cardImage: '/users/mac/fundamentals/memory_game/images/queen-of-diamonds.png',
	}, 
	{
		card: 'king',
		suit: 'hearts',
		cardImage: '/users/mac/fundamentals/memory_game/images/king-of-hearts.png',
	}, 
	{
		card: 'king',
		suit: 'diamonds',
		cardImage: '/users/mac/fundamentals/memory_game/images/king-of-diamonds.png'
	}
];

var cardsInPlay = []; 

var checkForMatch = function() {
	 {
  } if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
}
}

var cardFlip = function (cardId) {
	console.log("User flipped " + cards[cardId].card);

	cardsInPlay.push(cards[cardId].card); 

	console.log(cards[cardId].cardImage);

	console.log(cards[cardId].suit);

	if (cardsInPlay.length === 2); {

	checkForMatch();

	cardsInPlay = [];
 	}
};


cardFlip(0);
cardFlip(2);