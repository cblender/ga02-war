// INITIALIZE DECK
// -- Create deck class
//      - property: cards
// The deck's main property is an array of objects (cards) that each have a SUIT, RANK, and SCORE property.
// When the page is opened, the deck is initialized in a NONRANDOM order using nested for loops.
// When the game is begun, the deck is split between the two players 

// INITIALIZE PLAYERS - SPLIT DECK
// -- Create player class
//      - property: name
//      - property: library
//      - property: score
// When a game is begun, the deck is split randomly between the two players using a for loop that selects a random index each iteration.
// Additionally, the loop must alternate between the two players to split the deck.

// COMMAND - EXECUTE ROUND (DRAW)
// -- "draws" index[0] of each player's library and adds them to the "pot".  
// -- The player with the higher-scoring card is the winner of that round.
// -- In the event of a tie, the cards remain in the pot and the new index[0] cards are also added to the pot directly.  
// -- Then, another round occurs (total of 6 cards in the pot)
// -- Once the winner is decided, all cards from the pot are added to the END (bottom) of the winner's library.
// -- At the end of the round, if one player has all 52 cards, the game ends and that player is the winner.


// COMMAND - RESET
// -- Prints the final score and declares a winner (the player with the higher score wins)
// -- Resets player classes, emptying their properties
// -- Resets deck, emptying the cards array and refilling it.
