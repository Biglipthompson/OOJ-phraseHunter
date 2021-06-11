/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const buttonReset = document.querySelector('#btn__reset');
const keys = document.getElementsByClassName('key');


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

//This checks for the winning move true if the game was won and false if not
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    let hiddenLetters = document.getElementsByClassName("hide");
    if(hiddenLetters.length === 0) {
            return true;
    } else {
           return false;
    }
};



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
            buttonReset.textContent = 'Play again?';
            this.resetGame();
        } else {
            h1Message.textContent = 'You lose';
            overlay.className = 'lose';
            buttonReset.textContent = 'Play again?';
            this.resetGame();
        }
    }

handleInteraction(e) {
//Disable the key button
    e.disabled = true;
//This is the letter picked in the phrase
    const key = e.textContent;

    if (this.activePhrase.checkLetter(key)) {
        e.className = 'chosen key'; 
        this.activePhrase.showMatchedLetter(key);
    if (this.checkForWin()){
        this.gameOver(true);
        }
}
    else {
        e.className = "wrong";
        this.removeLife();
    }
}
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    this.missed++;
    const tries = document.querySelector(".tries");
    tries.firstElementChild.src = "images/lostHeart.png";
    tries.setAttribute("class", "lost");
    if (this.missed === 5) {
        this.gameOver(false);
}}
resetGame() {
    const phraseLi = document.querySelector('#phrase ul');
    phraseLi.innerHTML = '';
    this.missed = 0;
    const qwerty = document.querySelectorAll('#qwerty button');
    for (let i = 0; i < qwerty.length; i++) {
        qwerty[i].className = 'key';
        qwerty[i].disabled = false;
    } 
    const tries = document.querySelectorAll("img[src='images/lostHeart.png']");
    tries.forEach(life => life.setAttribute("src", "images/liveHeart.png"));
  }
}
