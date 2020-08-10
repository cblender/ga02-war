// ========================================================================================================================================== //



/*$$$$$$$$ /$$       /$$                 /$$      /$$                                               /$$      /$$  /$$$$$$  /$$$$$$$  /$$
|__  $$__/| $$      |__/                | $$$    /$$$                                              | $$  /$ | $$ /$$__  $$| $$__  $$| $$
   | $$   | $$$$$$$  /$$  /$$$$$$$      | $$$$  /$$$$  /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$      | $$ /$$$| $$| $$  \ $$| $$  \ $$| $$
   | $$   | $$__  $$| $$ /$$_____/      | $$ $$/$$ $$ /$$__  $$ |____  $$| $$__  $$ /$$_____/      | $$/$$ $$ $$| $$$$$$$$| $$$$$$$/| $$
   | $$   | $$  \ $$| $$|  $$$$$$       | $$  $$$| $$| $$$$$$$$  /$$$$$$$| $$  \ $$|  $$$$$$       | $$$$_  $$$$| $$__  $$| $$__  $$|__/
   | $$   | $$  | $$| $$ \____  $$      | $$\  $ | $$| $$_____/ /$$__  $$| $$  | $$ \____  $$      | $$$/ \  $$$| $$  | $$| $$  \ $$    
   | $$   | $$  | $$| $$ /$$$$$$$/      | $$ \/  | $$|  $$$$$$$|  $$$$$$$| $$  | $$ /$$$$$$$/      | $$/   \  $$| $$  | $$| $$  | $$ /$$
   |__/   |__/  |__/|__/|_______/       |__/     |__/ \_______/ \_______/|__/  |__/|_______/       |__/     \__/|__/  |__/|__/  |__/|_*/



// ========================================================================================================================================== //

// INTERNAL FORMATTING:
// The "TEST LOGGER" comment indicates a line of code that should be removed after the program is complete.
// This comment should ALWAYS be indented exactly 16 "Tabs".

// BEST PRACTICES FOR FORMATTING FUNCTIONS THAT HANDLE CARD OBJECTS
// RULE 1:
// ALL.  VARIABLES.  ARE.  ARRAYS.  Whenever an index is pulled OUT OF an Array, it must also be placed INTO an Array.
// ALL.  VARIABLES.  ARE.  ARRAYS.  Holder variables will take input directly from SPLICE methods of other arrays.
// ALL.  VARIABLES.  ARE.  ARRAYS.  Functions that require holder variables as parameters will reference INDEX ZERO of that holder variable.

// ========================================================================================================================================== //

// CARD CLASS
// - Should have properties "suit", "value", and "score"
// - Suit and Value are only used for display output.
// - Score is an integer value used for game computation
class Card {
    constructor(suit, value, score){
        this.suit = suit;
        this.value = value;
        this.score = score;
    }
}

// ========================================================================================================================================== //

// DECK CLASS
// -- Create deck class
//      - property: cards
// The deck's main property is an array of objects (cards) that each have a SUIT, RANK, and SCORE property.
// When the page is opened, the deck is initialized in a NONRANDOM order using nested for loops.
// When the game is begun, the deck is split between the two players 
class Deck {
    constructor(){
        this.length = 52;
        this.cards = [];
        this.rounds = 0;
        this.p1Score = 0;
        this.p1Score = 0;
        this.victor = "";

        let suit = ["spades","diamonds","clubs","hearts"];
        let number = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        let rank = ["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"];
    
    // This loop is taken from the "OOP Cards" lab.  It uses nested for loops to construct the deck array.
    // NOTE: I WOULD LIKE TO IMPLEMENT variable deck lengths using a COUNT variable inside the secondary FOR loop.  The idea is that when the DECK is constructed,
    // the player can input a number, and after that many triggers of the secondary FOR loop, it will not trigger again (add "&& count < max" to parameters, etc.)
    for (let i of number) {
        for (let j of suit) {
            this.cards.push(new Card(j,rank[i],(i+2)))  
        }
    }
    
    console.log("A deck of cards was created!  It needs to be shuffled and split!");
  
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
        var i = 0;

        while(!winner){
            
            var card1 = p1.library.splice(0,1);
            var card2 = p2.library.splice(0,1);
            pot.push(card1);
            pot.push(card2);
                                              
            if (card1[0].score > card2[0].score) {
                console.log(p1.name," played a ",card1[0].value," of ",card1[0].suit,".  ",p2.name," played a ",card2[0].value," of ",card2[0].suit,".");
                winner = p1.name;
                // p1.library.push(pot); // IMPLEMENT LOOP TO PUSH EACH CARD BACK INTO A LIBRARY
                for(i=0;i<pot.length;i++){
                    p1.library.push(pot[i][0]);
                }

                pot = [];
            }

            else if (card1[0].score < card2[0].score) {
                console.log(p1.name," played a ",card1[0].value," of ",card1[0].suit,".  ",p2.name," played a ",card2[0].value," of ",card2[0].suit,".");
                winner = p2.name;
                // p2.library.push(pot);
                for(i=0;i<pot.length;i++){
                    p2.library.push(pot[i][0]);
                }

                pot = [];
            }

            else if (card1[0].score === card2[0].score) {
                console.log(p1.name," played a ",card1[0].value," of ",card1[0].suit,".  ",p2.name," played a ",card2[0].value," of ",card2[0].suit,".");
                console.log("You both played a ",card1[0].value,"!  IT'S WAR!!")
                var war1 = p1.library.splice(0,1);
                var war2 = p2.library.splice(0,1);
                pot.push(war1);
                pot.push(war2);
                console.log("You each put the top card of your library into the pot, then there is another round.");
            }

            this.p1Score = p1.library.length;
            this.p2Score = p2.library.length;
            this.rounds++;

        } // END WHILE LOOP OF DECK.DRAW()

        // BELOW: NON-VICTORY STATES
        if (this.p1Score != 0 && this.p2Score != 0 && winner){
            console.log(winner," wins the round!")
            console.log(p1.name," has ",(this.p1Score)," cards.  ",p2.name," has ",(this.p2Score)," cards.")
        }
        else if ((p1.library.length != 0 && this.p2Score != 0) && pot.length != 0) {
            console.log("There are ",pot.length," cards in the pot.")
        }

        // BELOW: VICTORY STATES
        else if ((this.p1Score === 0 || this.p2Score === 0) && pot.length != 0) {
            
            if (this.p1Score === 0) {
                winner = p2.name;
                for(i=0;i<pot.length;i++){
                    p2.library.push(pot[i][0]);
                }
                this.victor = p2.name;
            }
            else if (this.p2Score === 0) {
                winner = p1.name;
                for(i=0;i<pot.length;i++){
                    p1.library.push(pot[i][0]);
                }
                this.victor = p1.name;
            }
            this.end();
        }

        else if ((this.p1Score === 0 || this.p2Score === 0) && pot.length === 0) {
            
            if (this.p1Score === 0) {
                this.victor = p2.name;
            }
            else if (this.p2Score === 0) {
                this.victor = p1.name;
            }
            this.end();
        }
    } // END OF DRAW COMMAND
    


    // COMMAND: SHUFFLE DECK
    shuffle() {
        // This very nice for loop is referred to as the "Fisher-Yates Shuffle".  I did not design it.
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        console.log("The deck was shuffled!");
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
    }



    // COMMAND - START
    // - Resets classes (passed as parameters to the method)
    // - Initializes new Deck and Players
    start(p1, p2, d) {
        if (this.rounds) {
            this.end();
        }
        
        d = new Deck();
        p1 = new Player(prompt("Player One: please input your name."),[],0,[]);
        p2 = new Player(prompt("Player Two: please input your name"),[],0,[]);

        console.log("A new game of WAR! has begun!");
        console.log(p1.name," is player one.  ",p2.name," is player two.");
        alert("A new game of WAR! has begun!");
    }



    // COMMAND - END
    // - Checks VICTOR variable
    // - Announces winner
    // - Announces duration of match (number of rounds)
    end(p1,p2) {
        if(this.victor){
            console.log("GAME OVER!!  ",this.victor," is the winner!!")
            alert("GAME OVER!!  ",this.victor," is the winner!!")
        }
        else if(!this.victor){
            if (this.p1Score === this.p2Score){
                console.log("GAME OVER!!  The game was a tie!!");
            }
            else if (this.p1Score > this.p2Score) {
                console.log("GAME OVER!!  ",p1.name," is the victor!!");
            }
            else if (this.p1Score < this.p2Score) {
                console.log("GAME OVER!!  ",p2.name," is the victor!!");
            }
            
        }
        console.log("The game lasted ",this.rounds," rounds!")
    }
    



    /* COMMAND: DRAW A RANDOM CARD (***DEPRECIATED***)
    //
    // *** NOTE !!! *** - I am retaining this code here until I can transfer it to a sandbox repo for future use because it is an elegant little piece of code.
    //    
    drawRandom() {
        let chosenCard = this.cards.splice([(Math.floor(Math.random()*this.cards.length))], 1)
        return chosenCard
    }
    */
}

// ========================================================================================================================================== //

// PLAYER CLASS
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

// ========================================================================================================================================== //

// RUNTIME

var playerOne = new Player(prompt("Player One: please input your name."),[],0,[]);
var playerTwo = new Player(prompt("Player Two: please input your name"),[],0,[]);
console.log(playerOne.name," is player one.  ",playerTwo.name," is player two.");
const war = new Deck();

console.log("Welcome to WAR!  Refer to the README file if you need help!  Have fun!");
