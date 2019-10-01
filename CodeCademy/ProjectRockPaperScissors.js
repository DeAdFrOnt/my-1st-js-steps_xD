//!TASK
/*Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.*/

//make check of wrote
const getUserChoice = userInput => {
    userInput= userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    } else{
      console.log('Only rock, paper or scissors could be write here')
    }
  }
  //random number for computer
  function getComputerChoice() {
    randomNumber=Math.floor(Math.random()*3)
    switch (randomNumber){
      case 0:
        return 'rock'
        break;
      case 1:
        return 'paper'
        break;
      case 2:
        return 'scissors'
    }
  }
  //make rules
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice===computerChoice){
      return 'The game is a tie!'
    }
    if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'Computer won'
      } else{
        return 'U won'
      }
    }
    if(userChoice==='paper'){
      if(computerChoice==='scissors'){
        return 'Computer won'
      } else{
        return 'U won'
      }
    }
    if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'Computer won'
      } else{
        return 'U won'
      }
    }
  }
  //say who won
  console.log(determineWinner('rock'))
  const playGame=()=>{
    let userChoice=getUserChoice('scissors')
    let computerChoice=getComputerChoice()
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  }
  playGame()