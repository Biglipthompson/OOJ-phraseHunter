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
    checkLetter(){
        return game.activePhrase.phrase.includes(letter);
    }

    showMatchedLetter() {
        if (e.target === `${word}`) {

        }
    }
}