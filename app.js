function rockPaperScissors() {
    'use strict';
    var userInput = document.getElementById('choice').value.toLowerCase(), computerChoice = Math.random() * 2;
    if (userInput === 'bomb') {
        document.getElementById('output').innerHTML = 'You Won, you dirty rat!!';
    } else if (userInput === 'rock') {
        if (computerChoice < 0.67) {
            document.getElementById('output').innerHTML = 'Its a Draw!! Computer chose Rock!';
        } else if (computerChoice >= 0.67 && computerChoice < 1.33) {
            document.getElementById('output').innerHTML = 'Computer Wins with Paper!!';
        } else {
            document.getElementById('output').innerHTML = 'You win!! Computer chose Scissors!';
        }
    } else if (userInput === 'paper') {
        if (computerChoice < 0.67) {
            document.getElementById('output').innerHTML = 'You Win!! Computer chose Rock!';
        } else if (computerChoice >= 0.67 && computerChoice < 1.33) {
            document.getElementById('output').innerHTML = 'Its a Draw!! Computer chose Paper!';
        } else {
            document.getElementById('output').innerHTML = 'Computer wins with Scissors!';
        }
    } else if (userInput === 'scissors') {
        if (computerChoice < 0.67) {
            document.getElementById('output').innerHTML = 'Computer wins with Rock!';
        } else if (computerChoice >= 0.67 && computerChoice < 1.33) {
            document.getElementById('output').innerHTML = 'You Win!! Computer chose Paper!';
        } else {
            document.getElementById('output').innerHTML = 'Its a Draw!! Computer chose Scissors!';
        }
    } else {
        document.getElementById('output').innerHTML = 'Please enter a valid selection';
    }
    return false;
}

