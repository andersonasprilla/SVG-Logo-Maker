const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        message: 'what shape ?',
        name: 'shape'
    }
]

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.err(err)
        }
        console.log('Sucessfully wrote to ' + fileName)
    })
}

const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile('./examples/file.svg', answers.shape)
    })
}

init()