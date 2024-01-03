const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shape/shapes');

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

   
    
        })
    }
    
start();