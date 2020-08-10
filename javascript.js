
/*$$$$$$$$ /$$       /$$                 /$$      /$$                                               /$$      /$$  /$$$$$$  /$$$$$$$  /$$
|__  $$__/| $$      |__/                | $$$    /$$$                                              | $$  /$ | $$ /$$__  $$| $$__  $$| $$
   | $$   | $$$$$$$  /$$  /$$$$$$$      | $$$$  /$$$$  /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$      | $$ /$$$| $$| $$  \ $$| $$  \ $$| $$
   | $$   | $$__  $$| $$ /$$_____/      | $$ $$/$$ $$ /$$__  $$ |____  $$| $$__  $$ /$$_____/      | $$/$$ $$ $$| $$$$$$$$| $$$$$$$/| $$
   | $$   | $$  \ $$| $$|  $$$$$$       | $$  $$$| $$| $$$$$$$$  /$$$$$$$| $$  \ $$|  $$$$$$       | $$$$_  $$$$| $$__  $$| $$__  $$|__/
   | $$   | $$  | $$| $$ \____  $$      | $$\  $ | $$| $$_____/ /$$__  $$| $$  | $$ \____  $$      | $$$/ \  $$$| $$  | $$| $$  \ $$    
   | $$   | $$  | $$| $$ /$$$$$$$/      | $$ \/  | $$|  $$$$$$$|  $$$$$$$| $$  | $$ /$$$$$$$/      | $$/   \  $$| $$  | $$| $$  | $$ /$$
   |__/   |__/  |__/|__/|_______/       |__/     |__/ \_______/ \_______/|__/  |__/|_______/       |__/     \__/|__/  |__/|__/  |__/|_*/

// INTERNAL FORMATTING:
// The "TEST LOGGER" comment indicates a line of code that should be removed after the program is complete.
// This comment should ALWAYS be indented exactly 16 "Tabs".

// INITIALIZE DECK
// -- Create deck class
//      - property: cards
// The deck's main property is an array of objects (cards) that each have a SUIT, RANK, and SCORE property.
// When the page is opened, the deck is initialized in a NONRANDOM order using nested for loops.
// When the game is begun, the deck is split between the two players 

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
            this.cards.push(new Card(i,rank[j],(j+2)))
        }
    }
    console.log("A deck of cards was created!  It needs to be shuffled and split!");

    // console.log("TEST ONE ",this.cards);                                    // TEST LOGGER - COMMENT OUT WHEN FINISHED    
    }

// COMMAND: EXECUTE ROUND (DRAW)
// -- "draws" index[0] of each player's library and adds them to the "pot".  
// -- The player with the higher-scoring card is the winner of that round.
// -- In the event of a tie, the cards remain in the pot and the new index[0] cards are also added to the pot directly.  Then, another round occurs.
// -- Once the winner is decided, all cards from the pot are added to the END (bottom) of the winner's library.
// -- At the end of the round, if one player has all 52 cards, the game ends and that player is the winner.

    draw(p1, p2) {
        var pot = [];
        var winner = "";
        var victor = "";
        var i = 0;

        while(!winner){
            var card1 = p1.library.splice(0,1);     // NOTE!!!!!!  ||  FIND OUT HOW TO PASS THE *CONTENTS* OF library[0] to var!!!!!
            var card2 = p2.library.splice(0,1);     // IMPORTANT!  ||  MAKE SURE REFERENCES IN WHILE LOOP BELOW WORK PROPERLY!!!!!!!
            pot.push(card1);
            pot.push(card2);
            
            /*
            console.log("TEST WHILE ",p1.name);                                 // TEST LOGGER - COMMENT OUT WHEN FINISHED
            console.log("TEST WHILE ",p2.name);                                 // TEST LOGGER - COMMENT OUT WHEN FINISHED
            console.log("TEST WHILE ",card1);                                   // TEST LOGGER - COMMENT OUT WHEN FINISHED
            console.log("TEST WHILE ",card2);                                   // TEST LOGGER - COMMENT OUT WHEN FINISHED
            console.log("TEST WHILE ",pot);                                     // TEST LOGGER - COMMENT OUT WHEN FINISHED
            */
                                              
            if (card1[0].score > card2[0].score) {
                console.log(p1.name," played a ",card1[0].value," of ",card1[0].suit,".  ",p2.name," played a ",card2[0].value," of ",card2[0].suit,".");
                winner = p1.name;
                // p1.library.push(pot); // IMPLEMENT LOOP TO PUSH EACH CARD BACK INTO A LIBRARY
                for(i=0;i<pot.length;i++){
                    p1.library.push(pot[i][0]);
                }

                pot = [];

                // console.log("TEST IF P1 ",p1.library);                        // TEST LOGGER - COMMENT OUT WHEN FINISHED
            }

            else if (card1[0].score < card2[0].score) {
                console.log(p1.name," played a ",card1[0].value," of ",card1[0].suit,".  ",p2.name," played a ",card2[0].value," of ",card2[0].suit,".");
                winner = p2.name;
                // p2.library.push(pot);
                for(i=0;i<pot.length;i++){
                    p2.library.push(pot[i][0]);
                }

                pot = [];

                // console.log("TEST IF P2 ",p2.library);                        // TEST LOGGER - COMMENT OUT WHEN FINISHED
            }

            else if (card1[0].score === card2[0].score) {
                console.log(p1.name," played a ",card1[0].value," of ",card1[0].suit,".  ",p2.name," played a ",card2[0].value," of ",card2[0].suit,".");
                console.log("You both played a ",card1[0].value,"!  IT'S WAR!!")
                var war1 = p1.library.splice(0,1);
                var war2 = p2.library.splice(0,1);
                pot.push(war1);
                pot.push(war2);
                console.log("You each put the top card of your library into the pot, then there is another round.");
                
                // console.log("TEST IF WAR ",pot);                               // TEST LOGGER - COMMENT OUT WHEN FINISHED
            }

        } // END WHILE LOOP

        // THIS STATEMENT CHECKS END-OF-ROUND STATES
        if (p1.library.length != 0 && p2.library.length != 0 && winner){
            console.log(winner," wins the round!")
        }
        else if ((p1.library.length != 0 && p2.library.length != 0) && pot.length != 0) {
            console.log("There are ",pot.length," cards in the pot.")
        }
        else if ((p1.library.length === 0 || p2.library.length === 0) && pot.length != 0) {
            if (p1.library.length === 0) {
                victor = p2.name;
            }
            else if (p2.library.length === 0) {
                victor = p1.name;
            }
            console.log("GAME OVER!!  ",victor," is the winner!!")
            alert("GAME OVER!!  ",victor," is the winner!!")
        }
        else if ((p1.library.length === 0 || p2.library.length === 0) && pot.length === 0) {
            if (p1.library.length === 0) {
                victor = p2.name;
            }
            else if (p2.library.length === 0) {
                victor = p1.name;
            }
            console.log("GAME OVER!!  ",victor," is the winner!!")
            alert("GAME OVER!!  ",victor," is the winner!!")
        }
        console.log(p1.name," has ",(p1.library.length)," cards.  ",p2.name," has ",(p2.library.length)," cards.")

    } // END DRAW FUNCTION
    

// COMMAND: DRAW A RANDOM CARD (***DEPRECIATED***)    
    drawRandom() {
        // This method draws a random card from the deck, but is not used for the game of WAR
        let chosenCard = this.cards.splice([(Math.floor(Math.random()*this.cards.length))], 1)
        return chosenCard
    }



// COMMAND: SHUFFLE DECK
    shuffle() {
        // This very nice for loop is referred to as the "Fisher-Yates Shuffle".  I did not design it.
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        console.log("The deck was shuffled!");

        // console.log(this.cards);                                // TEST LOGGER - COMMENT OUT WHEN FINISHED
    }


// COMMAND: SPLIT DECK BETWEEN PLAYERS
// When a game is begun, the deck is split randomly between the two players using a for loop that selects a random index each iteration.
// Additionally, the loop must alternate between the two players to split the deck.
    split(p1, p2) {
        let i = 0;
        for(i=0; i<this.cards.length; i++) {
            let chosenCard = this.cards[i];
            if(i === 0 || i % 2 === 0) {
                p1.library.push(chosenCard);
            }
            else if(i % 2 !== 0) {
                p2.library.push(chosenCard);
            }
        }
        console.log("The deck has been split!");
        console.log(playerOne.name," has ",(playerOne.library.length)," cards.  ",playerTwo.name," has ",(playerTwo.library.length)," cards.")

        // console.log(p1.library);                                // TEST LOGGER - COMMENT OUT WHEN FINISHED
        // console.log(p2.library);                                // TEST LOGGER - COMMENT OUT WHEN FINISHED
    }

// COMMAND - RESET
// -- Prints the final score and declares a winner (the player with the higher score wins)
// -- Resets player classes, emptying their properties
// -- Resets deck, emptying the cards array and refilling it.
    reset(d, p1, p2) {
        console.log(p1.name," has ",(p1.library.length)," cards.  ",p2.name," has ",(p2.library.length)," cards.")
        if (p1.library.length > p2.library.length){
            console.log(p1.name," wins!!");
        }
        else if (p1.library.length < p2.library.length){
            console.log(p2.name," wins!!");
        }
        else if (p1.library.length === p2.library.length){
            console.log("The game is a draw!!");
        }
        d = new Deck();
        alert("The game was reset!");
        p1 = new Player(prompt("Player 1: Input your name"),[],0,[]);
        p2 = new Player(prompt("Player 2: Input your name"),[],0,[]);
    }
}


// -- Create player class
//      - property: name
//      - property: library
//      - property: score


class Player {
    constructor(name, library, points, pile) {
        this.name = name;
        this.library = library;
        this.points = points;
        this.pile = pile;
    }

}



// RUNTIME

var playerOne = new Player(prompt("Player 1: Input your name"),[],0,[]);

var playerTwo = new Player(prompt("Player 2: Input your name"),[],0,[]);

console.log(playerOne.name," has ",(playerOne.library.length)," cards.  ",playerTwo.name," has ",(playerTwo.library.length)," cards.")

const war = new Deck();

