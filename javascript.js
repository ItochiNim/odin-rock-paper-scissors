//Rock Paper Scissors Game from Odin Project

//string declaration to compare choices
const possibilities = '012';

//score array
let score = [0, 0]


game();

function game() {

    for (let index = 0; index < 5; index++) {

        //get user for it's choice
        const userChoiceString = prompt("Your choice").toLowerCase();

        //get app choice
        const appChoiceString = getComputerChoice();

        //turn user's choice to number
        const userChoice = choiceToNumber(userChoiceString);

        //get result
        const result = compareChoices(choiceToNumber(userChoiceString), choiceToNumber(appChoiceString));

        //print result
        printResult(result,userChoiceString,appChoiceString);

    }

    console.log("The Score is " + score[0] + " - " + score[1]);

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


    if (possibilities.at(userChoice - 1) == appChoice) {
        score[0] += 1;
        return 'won';
    }
    else if (possibilities.at(userChoice - 2) == appChoice) {
        score[0] += 1;
        return 'lose';
    }

    else {
        return 'draw';
    }

}

//print win/lose
function printResult(result, userChoiceString, appChoiceString) {
    switch (result) {
        case 'won':
            console.log(`You Won! ${userChoiceString.charAt(0).toUpperCase() + userChoiceString.slice(1)} beats ${appChoiceString.charAt(0).toUpperCase() + appChoiceString.slice(1)}`);
            break;

        case 'lose':
            console.log(`You Lose! ${appChoiceString.charAt(0).toUpperCase() + appChoiceString.slice(1)} beats ${userChoiceString.charAt(0).toUpperCase() + userChoiceString.slice(1)}`)
            break;

        case 'draw':
            console.log('It\'s a Draw!')
            break;

        default:
            break;
    }
}