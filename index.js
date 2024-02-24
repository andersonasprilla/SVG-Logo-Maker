const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'list',
        message: 'what shape ?',
        name: 'shapes',
        choices: ['square', 'rectangle', 'circle', 'triangle']
    }
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
        writeToFile('./examples/logo.svg', answers.shapes)       
    })
}

init()