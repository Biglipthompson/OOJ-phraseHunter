/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const buttonReset = document.querySelector('#btn__reset');

class Game  {
    constructor() {
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = this.createPhrases(); 
};   

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const phraseObjects = [
        new Phrase ('Apple Is the goat'),
        new Phrase ('Javascript is Amazing'),
        new Phrase ('I love investing'),
        new Phrase ('I will become a FullStack Developer'),
        new Phrase ('Redbull gives you wings')
    ];
    return phraseObjects;
};

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    const phraseObject = this.phrases[randomPhrase];
    return phraseObject;
    };

startGame(){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; 
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}

    handleInteraction(e) {
        e.disabled = true;
        const letter = e.textContent;
        if (this.activePhrase.checkLetter(letter)) {
            e.className = 'chosen key'; 
            this.activePhrase.showMatchedLetter(letter);
        if (this.checkForWin()){
            let message = "Correct Phrase!";
            let className = "win"; 
            this.gameOver(message, className);
        }
    }
    else if (!this.activePhrase.checkLetter(letter)){
        e.className = "wrong key";
        this.removeLife();
    }
}

//This checks for the winning move true if the game was won and false if not
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin(gameWon) {
        let chosenLetters = document.querySelectorAll('.letter');
        let showLetters = document.querySelectorAll('.show');
        if (showLetters.length === chosenLetters.length) {
            return true;
        } else {
            return false;
        }
    }
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() { 
            const tries = document.querySelector("img[src='images/liveHeart.png']");
            tries.setAttribute("src", "images/lostHeart.png");
            this.missed += 1;
        if (this.missed === 5 ) {
            this.gameOver();
        }
    }
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const h1Message = document.getElementById('game-over-message');
        overlay.style.display = 'block';

        if (gameWon) {
            h1Message.textContent = 'You Won!';
            overlay.className = 'win';
            buttonReset.textContent = 'PLay again?';
            this.resetGame();
        } else {
            h1Message.textContent = 'You lose';
            overlay.className = 'lose';
            buttonReset.textContent = 'Play agin?';
            this.resetGame();
        }
    }

resetGame() {


    }
};
