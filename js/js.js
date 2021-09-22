
// buttons is a node list. It looks and acts much like an array.
let pScore = 0;
let pChoice = '';
let cScore = 0;
let cChoice= '';
const buttons = document.querySelectorAll('button');
const textarea = document.querySelector('textarea');
const para = document.querySelector('p');
const para2 = document.getElementById('out2');
const reset = document.getElementById('reset');

textarea.textContent = "ROCK PAPER SCISSORS BEST OF 5!";

function computerPlay() {
  let roll = Math.floor(Math.random() * 3);
  if (roll == 0) {
      return "r";
  } else if (roll == 1){
      return "p";
  } else {
      return "s";
  }   
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    if (e.target.id == 'r') {
      pChoice = 'r';
      textarea.textContent = "you picked : ROCK! , Press PLAY to begin!";
    } else if (e.target.id == 'p') {
      pChoice = 'p';
      textarea.textContent = "you picked : PAPER! , Press PLAY to begin!";
    } else if (e.target.id == 's'){
      pChoice = 's';
      textarea.textContent = "you picked : SCISSORS! , Press PLAY to begin!";
    }

    if (e.target.id == 'play' && pChoice !== "") {
      cChoice = computerPlay();
      textarea.textContent = 'pChoice :' + pChoice + "\n" +  "cChoice :" + cChoice; 
      textarea.textContent = playRound(pChoice,cChoice);
      pChoice = '';
      para2.textContent = "Your Score :" + pScore + " \n" + "Comp Score :" + cScore;
    } 
    if (pScore == '5') {
      textarea.textContent = 'GAME OVER , YOU WIN!';

    } else if (cScore == '5') {
      textarea.textContent = 'GAME OVER , YOU LOSE!';

    }
  });
});





function playRound(pChoice, cChoice) {
    
  if (pChoice == cChoice) {
      return "You both picked " + pChoice + "!" + " its a DRAW!"
      
  } else if (pChoice == 'r' && cChoice == 'p') {
      cScore++;
      return "You Lose! Paper beats Rock!";
  } else if (pChoice == 'p' && cChoice == 's') {
      cScore++;
      return "You Lose! Scissors beats Paper!"  
  } else if (pChoice == 's' && cChoice == 'r') {
      cScore++;
      return "You Lose! Rock beats Scissors!"
  } else if (pChoice == 'r' && cChoice == 's') {
      pScore++;
      return "You Win! Rock beats Scissors!"
  } else if (pChoice == 'p' && cChoice == 'r') {
      pScore++;
      return "You Win! Paper beats Rock!"
  } else if (pChoice == 's' && cChoice == 'p') {
      pScore++;  
      return "You Win! Scissors beats Paper!";
  }
  
}

