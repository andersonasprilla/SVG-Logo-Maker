const inquirer = require('inquirer')
const fs = require('fs')
const generateSvg = require('./lib/generateSvg')

const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'chars'
    },
    {
        type: 'input',
        message: 'Type the text color',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'what shape ?',
        name: 'shape',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        message: 'what shapes color ?',
        name: 'shapeColor',
    },
]

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.err(err)
        }
        console.log('Generated logo.svg')
    })
}

const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const renderShape = generateSvg(answers)
        writeToFile('./examples/logo.svg', renderShape)       
    })
}

init()