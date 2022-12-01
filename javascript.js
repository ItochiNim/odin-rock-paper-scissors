//Rock Paper Scissors Game from Odin Project

//string declaration to compare choices
const possibilities = '012';

let round = 0;

//score array
let score = [0, 0]

buttons = document.querySelectorAll('img');
buttons.forEach(element => element.addEventListener('click', game))

function game(e) {

    score[0] + score[1] == 0 ? resetGame('start'): null;
    buttons.forEach(function(e) {
        e.classList.remove('lastSelected');
      })

    //get user for it's choice
    const userChoiceString = this.dataset.choice;
    this.classList.add('lastSelected');

    //get app choice
    const appChoiceString = getComputerChoice();

    //turn user's choice to number
    const userChoice = choiceToNumber(userChoiceString);

    //get result
    const result = compareChoices(choiceToNumber(userChoiceString), choiceToNumber(appChoiceString));


    console.log("The Score is " + score[0] + " - " + score[1]);

    printCurrentScore();
    printRoundResult(result, userChoiceString, appChoiceString);

    checkScore() ? printResult(result, userChoiceString, appChoiceString, score[0], score[1]) : null;

}

function printCurrentScore() {
    scoreText = document.getElementById('score');
    scoreText.textContent = `${score[0]} - ${score[1]}`;
}

function checkScore() {
    return score[0] == 5 ? true : score[1] == 5 ? true : false;

}

function choiceToNumber(choice) {

    switch (choice) {
        case 'rock':
            return '0';
            break;

        case 'paper':
            return '1';
            break;

        case 'scissors':
            return '2';
            break;

        default:
            console.error('The choice must be either rock, paper or scissors');
            break;
    }

}

function getComputerChoice() {
    const appChoiceArray = ['rock', 'paper', 'scissors'];
    let randInt = Math.floor(Math.random() * 3);
    return appChoiceArray[randInt];
}

function compareChoices(userChoice, appChoice) {
    round++;
    document.getElementById('round').textContent = round;

    if (possibilities.at(userChoice - 1) == appChoice) {
        score[0] += 1;
        return 'won';
    }
    else if (possibilities.at(userChoice - 2) == appChoice) {
        score[1] += 1;
        return 'lose';
    }

    else {
        return 'draw';
    }
}

//print win/lose
function printRoundResult(result, userChoiceString, appChoiceString) {
    resultText = document.getElementById('result');

    switch (result) {
        case 'won':
            resultText.textContent = `You Won! ${userChoiceString.charAt(0).toUpperCase() + userChoiceString.slice(1)} beats ${appChoiceString.charAt(0).toUpperCase() + appChoiceString.slice(1)}`;
            break;

        case 'lose':
            resultText.textContent = `You Lose! ${appChoiceString.charAt(0).toUpperCase() + appChoiceString.slice(1)} beats ${userChoiceString.charAt(0).toUpperCase() + userChoiceString.slice(1)}`;
            break;

        case 'draw':
            resultText.textContent = 'It\'s a Draw!';
            break;

        default:
            break;
    }
}

//print win/lose
function printResult(result, userChoiceString, appChoiceString, userScore, appScore) {
    resetGame('end');
    resultText = document.getElementById('result');
    buttons.forEach(function(e) {
        e.classList.remove('lastSelected');
      })

    switch (result) {
        case 'won':
            resultText.textContent = `You Won! ${userScore} - ${appScore}`;
            break;

        case 'lose':
            resultText.textContent = `You Lose! ${userScore} - ${appScore}`;
            break;

        case 'draw':
            resultText.textContent = 'It\'s a Draw!';
            break;

        default:
            break;
    }
}

function resetGame(gameState) {

    switch (gameState) {
        case 'start':
            document.getElementById('roundTitle').textContent = 'ROUND';
            document.getElementById('scoreTitle').textContent = '0';
            document.getElementById('scoreTitle').textContent = 'SCORE';
            document.getElementById('score').textContent = 0 - 0;
            document.getElementById('result').textContent = '';
            break;

        case 'end':
            round = 0;
            score[0] = 0;
            score[1] = 0;
            document.getElementById('roundTitle').textContent = '';
            document.getElementById('round').textContent = '';
            document.getElementById('scoreTitle').textContent = '';
            document.getElementById('score').textContent = '';
            break;
    }

}