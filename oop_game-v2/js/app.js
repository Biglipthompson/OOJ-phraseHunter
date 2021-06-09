const startGame = document.getElementById('btn__reset');
startGame.addEventListener('click', (e) => {
game = new Game();
game.startGame();
})

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    console.log(button);
    };