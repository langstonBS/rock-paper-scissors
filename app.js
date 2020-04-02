import { winOrLose } from './src/winOrLose.js';

//git values from HTML
const playButten = document.getElementById('button-press');
let computerThrowSpan = document.getElementById('message');
let loseGames = document.getElementById('loss');
let winGames = document.getElementById('win');
let gamesPlayeded = document.getElementById('games');
const resetButton = document.getElementById('reset-button');

let win = 0;
let loss = 0;
let person = 0;
let total = 0;

playButten.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    let selection = selectedChoice.value;
    let computer = computerPlay();
    let winner = winOrLose(person, computer);

    if (selection === 'rock'){
        person = 0;
    } else if (selection === 'paper'){
        person = 1;
    } else {
        person = 2;
    }

    

    countWinOrLoss(winner);
    tellThePlayer(win, loss, total);   
});

function computerPlay() {
    let compterMove = Math.floor(Math.random() * 3);
    if (compterMove === 1) {
        computerThrowSpan.textContent = 'Rock';
    }
    else if (compterMove === 2) {
        computerThrowSpan.textContent = 'Scissors';
    }
    else {
        computerThrowSpan.textContent = 'Paper';

    }
    return compterMove;

}

function countWinOrLoss(winRecord)
{
    if (winRecord === 1){
        win++; 
    } else if (winRecord === 2){
        loss++;
    } else {
        total++;
    }
}

function tellThePlayer(win, lose, total)
{
    winGames.textContent = win;
    loseGames.textContent = lose;
    total = total + win + lose;
    gamesPlayeded.textContent = total;
}

resetButton.addEventListener('click', () => {
    winGames.textContent = '0';
    loseGames.textContent = '0';
    gamesPlayeded.textContent = '0';
    computerThrowSpan.textContent = '';

    win = 0;
    loss = 0;
    person = 0;
    total = 0;

});

//anitlize values



//do grate things