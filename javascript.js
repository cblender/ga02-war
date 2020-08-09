// INITIALIZE DECK
// -- Create deck class
//      - property: cards
// The deck's main property is an array of objects (cards) that each have a SUIT, RANK, and SCORE property.
// When the page is opened, the deck is initialized in a NONRANDOM order using nested for loops.
// When the game is begun, the deck is split between the two players 

// INTERNAL FORMATTING:
// The "TEST LOGGER" comment indicates a line of code that should be removed after the program is complete.
// This comment should ALWAYS be indented exactly 16 "Tabs".

class Card {
    constructor(suit, value, score){
        this.suit = suit;
        this.value = value;
        this.score = score;
    }
}

class Deck {
    constructor(){
        this.length = 52;
        this.cards = [];

        let suit = ["spades","diamonds","clubs","hearts"];
        let number = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        let rank = ["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"];
    
    
    // This loop is taken from the "OOP Cards" lab.  It uses nested for loops to construct the deck array.
    for (let i of suit) {
        for (let j of number) {
            this.cards.push(new Card([i],[j+2],rank[j]))
        }
    }
    console.log(this.cards);                                    // TEST LOGGER - COMMENT OUT WHEN FINISHED    
    }
    
    drawRandom() {
        // This method draws a random card from the deck, but is not used for the game of WAR
        let chosenCard = this.cards.splice([(Math.floor(Math.random()*this.cards.length))], 1)
        return chosenCard
    }

   
    shuffle() {
        // This very nice for loop is referred to as the "Fisher-Yates Shuffle".  I did not design it.
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        console.log(this.cards);                                // TEST LOGGER - COMMENT OUT WHEN FINISHED
    }

    split(player1, player2) {
        let i = 0;
        for(i=0; i<this.cards.length; i++) {
            let chosenCard = this.cards[i];
            if(i === 0 || i % 2 === 0) {
                player1.library.push(chosenCard);
            }
            else if(i % 2 !== 0) {
                player2.library.push(chosenCard);
            }
        }
        console.log(playerOne.library);                         // TEST LOGGER - COMMENT OUT WHEN FINISHED
        console.log(playerTwo.library);                         // TEST LOGGER - COMMENT OUT WHEN FINISHED
    }
}


// INITIALIZE PLAYERS - SPLIT DECK
// -- Create player class
//      - property: name
//      - property: library
//      - property: score
// When a game is begun, the deck is split randomly between the two players using a for loop that selects a random index each iteration.
// Additionally, the loop must alternate between the two players to split the deck.

class Player {
    constructor(name, library, points, pile) {
        this.name = name;
        this.library = library;
        this.points = points;
        this.pile = pile;
    }

}

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


// RUNTIME

const WAR = new Deck();

var playerOne = new Player(prompt("Player 1: Input your name"),[],0);

console.log(playerOne);

var playerTwo = new Player(prompt("Player 2: Input your name"),[],0);

console.log(playerTwo);

