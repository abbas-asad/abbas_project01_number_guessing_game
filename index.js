#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 100);
let chances = 0;
// If random number becomes zero (It is rare case but not impossible)
if (randomNumber == 0) {
    randomNumber = randomNumber + 1;
}
while (true) {
    let input = await inquirer.prompt([
        {
            name: "guessedNumber",
            type: "number",
            message: "Pick a number between 1-100",
        },
    ]);
    let answer = input.guessedNumber;
    if (randomNumber == answer) {
        console.log(`\nCongratulations!🥳🥳 The number is ${randomNumber} and you guessed it right😁`);
        break;
    }
    else if (randomNumber > answer) {
        console.log(`The number is greater than ${answer}.`);
        ++chances;
    }
    else if (randomNumber < answer) {
        console.log(`The number is less than ${answer}.`);
        ++chances;
    }
    if (chances == 10) {
        console.log("\nGame Over!🎮");
        console.log(`The number is ${randomNumber}.`);
        break;
    }
}
let score = 10 - chances;
console.log(`Your score is ${score}/10`);
