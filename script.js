let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('.container');
const rockbox = document.querySelector('.rockbox');
const paperbox = document.querySelector('.paperbox');
const scissorsbox = document.querySelector('.scissorsbox');
const boxes = document.querySelectorAll('.playerbox');
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let roundWin = `You won the round!`;
let roundLost = "You lost the round. ";
let roundResults = document.querySelector('.roundResults');
let scoreBoard;
let pTagPlayerSelected = document.querySelector('#playerSelected');
let pTagBotSelected = document.querySelector('#botselected');
let pTagResult = document.querySelector('#resultptag');
let gameResultDisplay = document.querySelector('#scoreBox');
pTagPlayerSelected.textContent = `You picked:`
pTagBotSelected.textContent = `Bot picked:`
gameResultDisplay.textContent = `Score:`


//!functions to increase score
function increasePlayerScore(){
    playerScore++;
    scoreBoard = `Your score: ${playerScore} Bot's score: ${computerScore}`
    return scoreBoard;
}
//!functions to increase score
function increaseComputerScore(){
    computerScore++;
    scoreBoard = `Your score: ${playerScore} Bot's score: ${computerScore}`
    return scoreBoard
}
//!function for draw, for consistency
function draw(){
    scoreBoard = `Your score: ${playerScore} Bot's score: ${computerScore}`
    return scoreBoard;
}


//!gets random number (used for the computer to select r/p/s)
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

//!logic that handles the computer picking one: r/p/s
function getComputerSelect(){

    computerSelection = getRandomInt(3)
    
    if(computerSelection === 1){
        computerSelection = rock;

    }
    else if(computerSelection === 2){
        computerSelection = paper;
    }
    else if(computerSelection === 3){
        computerSelection = scissors;
    }
    console.log("%cThe computer picked: " + computerSelection, "color:blue")
    pTagBotSelected.textContent = `Bot selected: ${computerSelection}`;
    return computerSelection;
}

//!code that allows boxes to be clicked on and starts a round.
boxes.forEach(box => box.addEventListener('click', function (e){

    if (e.target.textContent === "Rock"){
        let playerSelection = rock;
        pTagPlayerSelected.textContent = `You selected: ${playerSelection}`;
        playRound(playerSelection, getComputerSelect());
        
    }
    else if(e.target.textContent === "Paper"){
        let playerSelection = paper;
        pTagPlayerSelected.textContent = `You selected: ${playerSelection}`
        playRound(playerSelection, getComputerSelect());
    }
    else if(e.target.textContent === "Scissors"){
        let playerSelection = scissors;
        pTagPlayerSelected.textContent = `You selected: ${playerSelection}`
        playRound(playerSelection, getComputerSelect());
    }
    else{
        return;
    }
}));


//!round + game logic
function playRound (playerSelection, computerSelection){   
    //?tie
    if (playerSelection === computerSelection){
        console.log("%cThe round ended in a draw!", "color:orange");
        draw();
    }
    
    //?everything that is not a tie
    if (playerSelection !== computerSelection){
        if((playerSelection === rock) && (computerSelection === paper)){
            console.log("%c" + roundLost, "color:red");
            increaseComputerScore(); 
        }
        if((playerSelection === rock) && (computerSelection === scissors)){
            console.log("%c" + roundWin, "color: green");
            increasePlayerScore();
        }
        if((playerSelection === paper) && (computerSelection === rock)){
            console.log("%c" + roundWin, "color: green");
            increasePlayerScore();
        }
        if((playerSelection === paper) && (computerSelection === scissors)){
            console.log("%c" + roundLost, "color:red");
            increaseComputerScore();
        }
        if((playerSelection === scissors) && (computerSelection === rock)){
            console.log("%c" + roundLost, "color:red");
            increaseComputerScore();
        }
        if((playerSelection === scissors) && (computerSelection === paper)){
            console.log("%c" + roundWin, "color: green");
            increasePlayerScore();
        }
    }
    console.log(scoreBoard);
    gameResultDisplay.textContent = scoreBoard;

}







// function game(){

//     console.log(`final score ${scoreBoard}`)

//     if( playerScore > computerScore){
//         console.log("%cYou won the match!", "color:green; font-size: 25px");
//         console.log(`to replay, you can type "game()" again and press enter, or simply press the "up" arrow key on your keyboard and then press enter.`)
//     }
//     if( playerScore < computerScore){
//         console.log("%cYou lost the match.", "color:red; font-size: 25px");
//         console.log(`to replay, you can type "game()" again and press enter, or simply press the "up" arrow key on your keyboard and then press enter.`)

//     }
//     if( playerScore === computerScore){

//         console.log("%cThe match ended in a draw.", "color:orange; font-size: 25px" )
//         console.log(`to replay, you can type "game()" again and press enter, or simply press the "up" arrow key on your keyboard and then press enter.`)
//     }


//     playerScore = 0;
//     computerScore = 0;

// }
