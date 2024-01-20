//Required npm packages
const inquirer = require('inquirer');
const jest = require('jest');
const CLI = require("./lib/cli");

/*
    Ask the user for input.
    1. Text for the logo. This can be up to 3 characters.
    2. What color should the text be, color keyword or Hexadecimal number.
    3. What shape should appear on the logo.
        a. circle
        b. triangle
        c. square
    4. What color should the shape be, color keyword or Hexadecimal number.
*/
const questions = [
    {
        type: 'input',
        message: 'What text would you like for your logo? Choose up to 3 characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color should the text be? Enter a color keyword or Hexadecimal number.',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'What shape should be on the logo?',
        name: 'shape',
        choices: [ 'circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        message: 'What color should the shape be?',
        name: 'shapecolor',
    }
];

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        let createLogo = new CLI();
        createLogo.run(answers);
    } catch (err) {
        console.log(err);
    }
}

init()