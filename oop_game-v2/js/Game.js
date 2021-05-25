/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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

    handleinteraction() {
        button.disabled = true;

        if (!game.activePhrase.checkLetter(button.textContent)) {
            button.className = 'wrong'; 
            game.removeLife();
        } else {
            button.className = 'chosen';
            game.activePhrase.showMatchedLetter(button.textContent);
        };

        game.resetGame(button)
    }

//This checks for the winning move true if the game was won and false if not
    checkForWin() {
        const showLetters = document.querySelectorSelectorAll('.show').length;
        const chosenLetters = document.querySelectorAll('.letter').length;
        return showLetters === chosenLetters;
    }
    
    removeLife() {

    }

    gameOver() {

    }
};
