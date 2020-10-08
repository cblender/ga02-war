# THIS MEANS WAR!

## General Assembly Project #2

Author: Chris Blendermann
Date: 8/9/2020

This simple game of War! runs in the browser console. You can input commands to advance the game, which are detailed below.

&nbsp;

## Rules of War!

- A standard deck of 52 playing cards is used. Aces are high. Jokers are out.
- The deck is shuffled, then split into two equal libraries. Each player receives one library (26 cards).
- Each round, the players reveal the top card of their library. The winner (discussed below) puts all cards from that round on the **bottom** of his or her library.
- If one card revealed this way is of greater value than the other, that card's owner wins the round.
- If the values of the revealed cards are the same, they are put into a "pot". Each player also puts an extra card into the pot **FACE DOWN** from the top of his or her library. Then, players reveal their top cards again.
- The game ends when one player has zero cards (the other has all 52).

&nbsp;

## Commands

There are several commands that you can type into the browser console to operate the game. Please note that this game is VERY rough, and you may find it necessary to reload the page to exit certain gamestates.

&nbsp;

### war. (overview)

The game instantiates a Deck object named “war”. This object contains the methods used to operate the game, and so whenever you type a command, you must begin it with “war”, as shown:

```
war.[command]
```

&nbsp;

### .shuffle

Randomizes the order of cards in a deck. You only need to enter this command once at the beginning of the game.

```
war.shuffle()
```

&nbsp;

### .split

Divides the deck of 52 between two players, passed as parameters to the method. This version of the game uses unchanging variables as the parameters. You only need to enter this command once at the beginning of the game.

```
war.split(playerOne, playerTwo)
```

&nbsp;

### .draw

Performs a single round of War! As described in the game rules above. This command also takes two parameters in the form of unchanging variables, as shown:

```
war.draw(playerOne, playerTwo)
```

&nbsp;

### .start

Resets the Deck class and both Player classes. This command takes three arguments, specifying the deck and players to reset, as shown:

```
war.start(playerOne, playerTwo, war)
```

&nbsp;

### .end

Ends the current game, displaying the victor and the duration of the game.

```
war.end()
```

&nbsp;

## Credits and Thanks

- This game uses a FOR loop array shuffler referred to as the “Fisher-Yates Shuffle”.
