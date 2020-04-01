//git values from HTML
const radeioSelet = document.getElementById('play-game');
const playButten = document.getElementById('button-press');
let message = document.getElementById('message');
let loseGames = document.getElementById('loss');
let winGames = document.getElementById('win');
let gamesPlayed = document.getElementById('win');

let win = 0;
let loss = 0;
let person = 0;

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
    console.log(person);
    
});



//anitlize values



//do grate things