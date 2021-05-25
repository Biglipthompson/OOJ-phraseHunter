const keyboard = document.getElementById('qwerty');

class Phrase { 
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    }

    //This displays the phrase on the gameboard
    //Do this to each phrase(item) when using forEach
    addPhraseToDisplay() {
    const hiddenPhrase = document.querySelector('#phrase ul');
        this.phrase.split('').forEach(word => {
            const li = document.createElement('li');
            hiddenPhrase.appendChild(li);

            if (word === " "){
                li.classList.add("space");

            } else {
            li.classList.add("hide");
            li.classList.add("letter");
            li.innerHTML = `${word}`;
            }
        });
    }


//This checks to see if the letter picked is part of the random phrase
  checkLetter(letter){
    return game.activePhrase.phrase.includes(letter);
    };


/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        const hiddenLetter = document.querySelectorAll('#phrase ul li');

        game.activePhrase.phrase.split('').forEach((word, index) => {
            if (game.activePhrase.checkLetter(letter) && hiddenLetter[index].textContent === letter) {
                hiddenLetter[index].className = 'show';
            }
        })
    }
}