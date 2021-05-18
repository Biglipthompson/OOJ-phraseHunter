const startGame = document.getElementById('btn__reset');

startGame.addEventListener('click', (e) => {
game = new Game();
game.startGame();
})