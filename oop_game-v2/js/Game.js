/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game  {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases(); 
        this.activePhrase = null;
};   

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

createPhrases() {
    const phraseObjects = [
        new Phrase ('Life is like a box of chocolates'),
        new Phrase ('Javascript is Amazing'),
        new Phrase ('I love investing'),
        new Phrase ('I will become a FullStack Developer'),
        new Phrase ('Redbull gives you wings')
    ];
    return phraseObjects;
}};