const startScreen = document.querySelector('.startScreen');
const container = document.querySelector('.container');
const startbtn = document.querySelector('.button');
let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let compScore = 0;
const optionBtn = document.querySelectorAll(`div.optionBtn`);
let playerPoints = document.querySelector('#playerScore');
let computerPoints = document.querySelector('#compScore');
const roundResults = document.querySelector('#roundResults');
const resetBtn = document.querySelector('#reset');
playerPoints.textContent = 0;
computerPoints.textContent = 0;
roundResults.textContent = "Results";

//!start button from splash screen to game screen!!!!
startbtn.addEventListener("click", function (e){
        startScreen.classList.add('display-none');
        container.classList.add('fadeIn');
        startGame();
});

function compPlay () {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "Scissors") {
            playerPoints.textContent = ++playerScore
          roundResults.textContent =  "You win! Rock beats Scissors.";
        }else if(computerSelection === "Paper"){
            computerPoints.textContent = ++compScore
          roundResults.textContent = "You lose! Paper beats rock.";
        }else {
            playerPoints.textContent = ++playerScore
            computerPoints.textContent = ++compScore
          roundResults.textContent = "Tie!"
        }
    }else if (playerSelection === 'paper') {
      if (computerSelection === "Scissors") {
            computerPoints.textContent = ++compScore
          roundResults.textContent = "You lose! Scissors beats Paper!";
        }else if (computerSelection === "Rock") {
            playerPoints.textContent = ++playerScore
          roundResults.textContent = "You win! Paper beats Rock!";
        }else {
            playerPoints.textContent = ++playerScore
            computerPoints.textContent = ++compScore
          roundResults.textContent = "Tie!";
        }
    }else if(playerSelection === "scissors") {
      if (computerSelection === "Rock") {
            computerPoints.textContent = ++compScore
          roundResults.textContent = "You lose! Rock beats Scissors!";
        }else if (computerSelection === "Paper") {
            playerPoints.textContent = ++playerScore
          roundResults.textContent = "You win! Scissors beats Paper!";
        }else {
            playerPoints.textContent = ++playerScore
            computerPoints.textContent = ++compScore
          roundResults.textContent = "Tie!"
        }
    }
   checkWinner();
  }
  resetGame();

  function checkWinner() {
  if (compScore === 5 && playerScore === 5) {
    roundResults.textContent = "The game is a Tie!";
    roundResults.style.color ='blue';
     optionBtn.forEach(button => {
     button.removeEventListener('click', getPlayerChoice);
   });
  }else if (compScore === 5) {
     roundResults.textContent = "You Lost the game to a computer!";
     roundResults.style.color ='red';
      optionBtn.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  }else if (playerScore === 5) {
    roundResults.textContent =  "You Win the game!!!!";
    roundResults.style.color ='green';
     optionBtn.forEach(button => {
     button.removeEventListener('click', getPlayerChoice);
   });
  }
}

function resetGame(){
    resetBtn.addEventListener('click', () =>{
        playerScore = 0;
        compScore = 0;
        playerPoints.textContent = 0;
        computerPoints.textContent = 0;
        
        startGame();
    })
}

function startGame(){
    optionBtn.forEach(button => {
        button.addEventListener('click', getPlayerChoice);
    });
}

function getPlayerChoice(e){
    playerSelection = (e.target.id);
    console.log(playerSelection);
    playRound(playerSelection, compPlay())
}
