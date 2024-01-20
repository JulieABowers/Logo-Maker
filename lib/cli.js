const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

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

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
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
    // TODO: Create a shape object based on inquirer data

    // TODO: Create a svg object and set text and textColor using user Data

    // TODO: Set svg shape with shape object created above

    // TODO: Write your svg file

  }
}

module.exports = CLI;
