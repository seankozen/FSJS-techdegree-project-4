/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');         // Gets start button
const screenKeyboard = document.getElementById('qwerty');          // Gets on screen keyboard
const computerKeyBoard = document.getElementsByClassName('key');   // Gets keys for actual keyboard keys

// Start button event listener 
startButton.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
});

// Screen keyboard event listener 
screenKeyboard.addEventListener('click', e => {
    let keyPressed = e.target;

    if(keyPressed.tagName === 'BUTTON'){
        game.handleInteraction(keyPressed);
    }
});

// Computer keyboard event listener 
document.addEventListener('keydown', e =>{
   let keyPressed = e.key;
   
   // Finds correct key that was pressed 
   for(let i = 0; i < computerKeyBoard.length; i++){
        if((keyPressed === computerKeyBoard[i].textContent) && computerKeyBoard[i].disabled !== true){
            game.handleInteraction(computerKeyBoard[i]);
        }
    }  
});