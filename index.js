// importing fs and inquire so that we can use them
const fs = require('fs');
const inquirer = require('inquirer');
// importing the classes defined in /shape/shapes.js to use it's constructors and functions
const { Circle, Triangle, Square } = require('./shape/shapes');

// creating Svg class to define the parameters when passed in and help create the logo.svg file code
class Svg {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    // outer shell of the svg code with indication of parameters being passed inside
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeEl}
        ${this.textEl}
        </svg>`;
    }
    // part of inner shell of svg code to position and define text
    setText(text, textColor){
        this.textEl = `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>`;
    }
    // part of inner shell of svg code to position the specified shape
    setShape(shape){
        this.shapeEl = shape.render();
    }
}

// function that is called upon to start and then prompt user to provide answers for the creation of the svg logo
function start() {
    inquirer
        .prompt([ 
            {
                type: 'list',
                name: 'shape',
                message: "What kind of shape would you like to use?",
                choices: ['Circle', 'Triangle', 'Square'],
            },
            
            {
                type: 'input',
                name: 'shapeColor',
                message: "Color for logo shape.",
                validate: (shapeColorInput) => {
                    if (shapeColorInput) {
                        return true;
                    } else {
                        console.log("Please enter a color for the shape.");
                        return false;
                    }
                },

            },

            {
                type: 'input',
                name: 'text',
                message: "Input the text you want for the logo.",
                validate: (input) =>
                    input.length <= 3 || "Text should be up to 3 characters long."
            },

            {
                type: 'input',
                name: 'textColor',
                message: "Color for text in logo.",
                validate: (textColorInput) => {
                    if (textColorInput) {
                        return true;
                    } else {
                        console.log("Please enter a color for the text.");
                        return false;
                    }
                },
            }

        ])
        .then(({shape, text, textColor, shapeColor}) => {
            let answer = '';
            // defining answer variable with a shape to be used in setting shape and it's color
            if (shape === 'Circle') {
                answer = new Circle();
            } else if (shape === 'Triangle') {
                answer = new Triangle();
            } else {
                answer = new Square();
            }
            
            answer.setColor(shapeColor);
            const svg = new Svg();
            svg.setText(text, textColor);
            svg.setShape(answer);
            
            // rendering the SVG logo
            fs.writeFile('logo.svg', svg.render(), (err) =>{
                if (err) {
                    console.log(err);
                } else {
                    console.log("SVG logo created successfully");
                }
            });
    });
};
    
// call to start function to run cli application
start();