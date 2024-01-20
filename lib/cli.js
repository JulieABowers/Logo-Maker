const fs = require('fs');
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

/*
    Ask the user for input.
    Create an SVG file based on the user input and call it 'logo.svg'.
        a. Size should be 300x200
    Print "Generated logo.svg" on the command line.
*/

class CLI {
  run(answers) {
    try {
        // Create a shape object based on inquirer data
        const data = CreateSVG(answers);
        //Write the svg file
        WriteToFile(data);
        console.log("Generated logo.svg");
    } catch (err) {
        console.log(err);
    }
  }
}

function CreateSVG({ text, textcolor, shape, shapecolor }) {
    // Create the shape.
    switch (shape) {
        case "circle":
            {
                shape = new  Circle();
                break;
            }
        case "triangle":
            {
                shape = new Triangle();
                break;
            }
        default:
            {
                shape = new Square();
            }
    }

    // Set the shape's color.
    shape.setColor(shapecolor);

    let svg = new SVG();
    svg.setTextElement(text, textcolor);
    svg.setShapeElement(shape);
    let finalSVG = svg.render();

    return finalSVG;
 }

 function WriteToFile(data) {
    //fs.writeFile("logo.svg", JSON.stringify(data), (err) => { 
    fs.writeFile("logo.svg", data, (err) => { 
    if (err) 
        console.log(err); 
    else { 
        console.log(data); 
    } 
    });
}

module.exports = CLI;
