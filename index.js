const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shape/shapes');

class Svg {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeEl}
        ${this.textEl}
        </svg>`;
    }
    setText(text, textColor){
        this.textEl = `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>`;
    }
    setShape(shape){
        this.shapeEl = shape.render();
    }
}

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
            
            fs.writeFile('logo.svg', svg.render(), (err) =>{
                if (err) {
                    console.log(err);
                } else {
                    console.log("SVG logo created successfully")
                }
                })
        })
    }
    
start();