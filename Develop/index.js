
const inquirer = require('inquirer');
//console.log(inquirer)
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name',
        }
    ])
    .then(answers => console.log(answers));

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
