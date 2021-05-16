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
            let li = document.createElement('li');
            hiddenPhrase.appendChild(li);
            if (word === ''){
            li.classList.add('space');
            } else {
            li.classList.add('letter'); 
            }
        });
    }
}