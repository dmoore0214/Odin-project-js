const choices =[ "rock", "paper", "scissors"];
function getComputerChoice(choices){
    
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playGame(computerSelection, playerSelection){
    if (playerSelection == computerSelection){
        return "No One Wins";
    } else if( playerSelection == 'rock' && computerSelection=='scissors' ||
    playerSelection=='scissors' && computerSelection =='paper'||
    playerSelection=='paper' && computerSelection=='rock'){
        return "You Win";
    } else{
        return "You LOSE!";
    } 
}

const computerSelection = getComputerChoice(choices);
const playerSelection = prompt("Rock, paper, or scissors");
let player = playerSelection.toLowerCase();

console.log("You chose: " +player)
console.log("Computer Chose: " + computerSelection)
console.log(playGame(computerSelection,player))
