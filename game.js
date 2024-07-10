#! /usr/bin/env node
//shebang for npm
import inquirer from "inquirer";
import chalk from "chalk";
// 1) Computer will generate a random Number
// 2) User input for Gussing a Number
// 3) Compare both numbers and show results
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1 - 6",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bold.blueBright("Congratulations! you guessed the right number."));
}
else {
    console.log(chalk.bold.magenta(`You guessed the wrong number, the correct answer is ${randomNumber}`));
}
;
