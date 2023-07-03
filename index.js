const choices =[ "rock", "paper", "scissors"];
let playerScore = 0;
    let computerScore = 0;
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
        playerScore++;
        return "You Win";
    } else{
        computerScore++;
        return "You LOSE!";
    } 
}

function gameTo5(){
    for(i=0; i< 5; i++){ 
        let playerSelection=prompt("Rock, paper, scissors");
        console.log("You chose: " + playerSelection.toLowerCase());
        let computerSelection = getComputerChoice(choices);
        console.log("Computer Chose: " + computerSelection);
        playGame(computerSelection, playerSelection)
    }
       if (playerScore > computerScore){
        return "You Win";
       } else if (playerScore < computerScore){
        return "You Lose";
       }else {
        return "You both win"
       }
    }


console.log(gameTo5());
console.log("Your score was " + playerScore + "Computer score was "+ computerScore)