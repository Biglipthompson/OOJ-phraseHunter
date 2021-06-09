const keys = document.getElementsByClassName('key');
const startGame = document.getElementById('btn__reset');

startGame.addEventListener('click', (e) => {

game = new Game(missed, activePhrase, phrases);
game.startGame();
})

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (event) => {
      game.handleInteraction(event.target);
    })
  }
