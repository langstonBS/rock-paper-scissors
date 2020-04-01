import { winOrLose } from './src/winOrLose.js';

//git values from HTML
const playButten = document.getElementById('button-press');
let message = document.getElementById('message');
let loseGames = document.getElementById('loss');
let winGames = document.getElementById('win');
let gamesPlayeded = document.getElementById('games');

let win = 0;
let loss = 0;
let person = 0;
let total = 0;

playButten.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    let selection = selectedChoice.value;
    console.log(selection);

    if (selection === 'rock'){
        person = 0;
    } else if (selection === 'paper'){
        person = 1;
    } else {
        person = 2;
    }

    let computer = computerPlay();
    let winner = winOrLose(person, computer);
    
    console.log(winner);
    
    countWinOrLoss(winner);
    tellThePlaer(win, loss, total);

    console.log(computer);
    console.log(person);
    console.log('win:', win);
    console.log('loss:', loss); 

});

function computerPlay() {
    let compterMove = Math.floor(Math.random() * 3);
    return compterMove;
}

function countWinOrLoss(winreconrd)
{
    if (winreconrd === 1){
        win = win + 1; 
    } else if (winreconrd === 2){
        loss = loss + 1;
    } else {
        total = total + 1;
    }
}


function tellThePlaer(win, lose, total)
{
    winGames.textContent = win;
    loseGames.textContent = lose;
    console.log('total', total);
    total = total + win + lose;
    gamesPlayeded.textContent = total;

}



//anitlize values



//do grate things