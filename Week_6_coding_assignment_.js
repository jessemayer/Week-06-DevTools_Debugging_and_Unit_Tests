const SUITS= ["♥", "♦", "♠", "♣"];// created two arrays one for suits and one for the value of each card
const VALUES = [2,3,4,5,6,7,8,9,10,11,12,13,14];
let playerOneDeck // created two player variables to play each other
let playerTwoDeck 

class Deck { //created class called deck 
    constructor(cards = newDeck()){
        this.cards = cards;
    }
     get numOfCards(){ // used get to encapsulate this.cards.length in the for loop
        return this.cards.length
     }

    shuffleDeck (){  // created a method called shuffleDeck to loop through the cards and make them random 
        for (let i = this.numOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1)) // created a random index that starts before the card we are on while adding random cards .ie shuffling cards
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
    
}

class Card { // created a class called card to hold the suit and value for each New card
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

function newDeck() { // created a method to create a new deck for when the game is restarted
    return SUITS.flatMap(suit => { //using flatMap() allows the two arrays suits and values to be combined creating one array with 52 different cards.
        return VALUES.map(value => {
            return new Card (suit, value)
        })
    })
}


startGame()
function startGame() {  // a function called start game
    const deck = new Deck() // created a new deck
    deck.shuffleDeck()  // called on function to shuffle deck
let playerOneScore = 0; // set both players score to start at 0
let playerTwoScore = 0;
    const deckHalfwayPoint = Math.ceil(deck.numOfCards / 2) // used math.ceil to make sure there is no rounding errors and then split the deck.numOfCards in half to have two shuffled stacks of cards
 
    playerTwoDeck = new Deck(deck.cards) // created a new deck an used .slice to 26 so that each player had 26 cards.
    playerTwoDeck = deck.cards.slice(0,26)    
    playerOneDeck = new Deck(deck.cards) //  created a new deck an used .slice 26 to 52 so that each player had 26 cards.
    playerOneDeck = deck.cards.slice(26,52)
    for (let i =0; i < 26; i++){ // for loop iterates through the deck
        if (playerOneDeck[i].value > playerTwoDeck[i].value)  { // shows scores and adds 1 point to the winner based of if else statement
            playerOneScore += 1
            console.log(playerOneDeck[i], 'player one card');
            console.log(playerTwoDeck[i], 'player two card');
            console.log(playerOneScore, 'player one score'); 
            console.log(playerTwoScore, 'player two score');
            
        } else if (playerOneDeck[i].value < playerTwoDeck[i].value)  {
            playerTwoScore += 1
            console.log(playerOneDeck[i], 'player one card');
            console.log(playerTwoDeck[i], 'player two card');
            console.log(playerOneScore, 'player one score');
            console.log(playerTwoScore, 'player two score');
        } // did not create a else statement for a event of a tie because it would have broke my code and seemed to work
        
    }// If else statement to determine the winner
    if (playerOneScore > playerTwoScore){
        console.log("Player One has a final score of " + playerOneScore + ' player one is the game winner');
    }
    else if (playerOneScore < playerTwoScore){
        console.log("Player Two has a final score of " + playerTwoScore + ' player two is the game winner');
    }
    else { // else statment in the event of a tie
        console.log("Player One has a final score of " + playerOneScore + " player two has a score of " + playerTwoScore + " War has ended in a Tie ");
    }
    
}
const deck = new Deck() // called on the new deck and deck.shuffle to start the game
deck.shuffleDeck()



