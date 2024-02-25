const inquirer = require('inquirer')
const fs = require('fs')
const generateSvg = require('./lib/generateSvg')

// Define the questions to ask the user using inquirer
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'chars',
        validate: function(value) {
            if(value.length < 4) {
                return true
            }
            return 'Please enter up to 3 characters'
        }
    },
    {
        type: 'input',
        message: 'Type the text color (Use color keyword or Hex number)',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose the logo shape ',
        name: 'shape',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        message: 'Type the shape color (Use color keyword or Hex number) ',
        name: 'shapeColor',
    },
]

// Function to write the generated SVG content to a file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.err(err)
        }
        console.log('Generated logo.svg')
    })
}

// Main function to initialize the application
const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const renderShape = generateSvg(answers)
        writeToFile('./examples/logo.svg', renderShape)       
    })
}

init()