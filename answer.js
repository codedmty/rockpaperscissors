const getUserChoice = (userInput) => {
  userInput = 'BOMB';
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please make a valid selection');
  }
};

const getComputerChoice = () => {
  let number = Math.random() * 2;
  if (number <= 0.66) {
    return 'rock';
  } else if (number > 0.66 && number <= 1.32) {
    return 'paper';
  } else if (number > 1.32) {
    return 'scissors';
  } else {
    console.log('There was a problem');
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You Won!'
  } else if (userChoice === computerChoice) {
    return 'The game is a draw!';
  } else if (userChoice === 'rock'){
    if (computerChoice === 'scissors') {
      return 'You Won!!';
    } else {
      return 'You Lost!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You Won!';
    } else {
        return 'You Lost!';
      }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You Won!';
    } else {
      return 'You Lost!';
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  
};

playGame(determineWinner);