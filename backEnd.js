const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
var winnerScores = [0, 0];

//add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
    //setup player's selection
    let playerSelection = e.target.innerText;
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    var computerSelection = getComputerSelection();

    //if computerSelection is less than .34, computer selects Rock
    // alert(document.getElementsByClassName("Buttons"))


    //setup a function to compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);

    //output scores to the DOM
    if (result === 'Player') {
        result += ' wins!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!'
    }

    //output score into Score DIV
    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

    //output player and computer's selections
    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    if (player === computer)
        return 'Draw';
    else if (player === 'Rock' && computer === 'Lizard')
        return 'Player';
    else if(player === 'Rock' && computer === 'Scrissors')
        return 'Player';
    else if(player === 'Paper' && computer === 'Spock')
        return 'Player';
    else if(player === 'Paper' && computer === 'Rock')
        return 'Player';
    else if(player === 'Scrissors' && computer === 'Paper')
        return 'Player';
    else if(player === 'Scrissors' && computer === 'Lizard')
        return 'Player';
    else if(player === 'Spock' && computer === 'Scrissors')
        return 'Player';
    else if(player === 'Spock' && computer === 'Rock')
        return 'Player';
    else if(player === 'Lizard' && computer === 'Spock')
        return 'Player';
    else if(player === 'Lizard' && computer === 'Paper')
        return 'Player';
    else return 'Computer'

}

function getComputerSelection() {
    var random = Math.random();


    if (random < 0.20) {
        return  'Rock';
    } else if (random <= 0.40) {
        return 'Paper';
    } else if (random <= 0.60) {
        return 'Scrissors';
    }else if (random <= 0.80) {
        return 'Lizard';
    }else{
        return 'Spock';
    }

}