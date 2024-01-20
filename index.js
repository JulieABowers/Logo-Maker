//Required npm packages
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

/*
    Ask the user for input.
    1. Text for the log. This can be up to 3 characters.
    2. What color should the text be, color keyword or Hexadecimal number.
    3. What shape should appear on the logo.
        a. circle
        b. triangle
        c. square
    4. What color should the shape be, color keyword or Hexadecimal number.

    Create an SVG file based on the user input and call it 'logo.svg'.
        a. Size should be 300x200
    Print "Generated logo.svg" on the command line.
*/



const askUser = async () => {
    try {
        const data = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What text would you like for your logo? Choose up to 3 characters.',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color should the text be?',
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
            },
        ]);
/*
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <circle cx="150" cy="100" r="80" fill="#fffff5"/>

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>

        </svg>
  */  
        fs.writeFile("logo.svg", JSON.stringify(data), (err) => { 
        if (err) 
            console.log(err); 
        else { 
            console.log(data); 
        } 
        });
        console.log(`${data.text}, ${data.textcolor}, ${data.shape}, ${data.shapecolor} `)
    
    } catch (err) {
        console.log(err);
    }
};

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textcolor = textColor;
        this.shapecolor = shapeColor;
    }
}

class Circle extends Shape {

    constructor(textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

askUser();