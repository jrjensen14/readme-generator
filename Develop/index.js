
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
//console.log(inquirer)
const promptReadmeQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provice a description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'do you have a screenshot of your project?',
            default: false
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'who contributed on your project?',
        },
        {
            type: 'input',
            name: 'licence',
            message: 'do you have a licence for your project?',
            default: false,
            choices: ['','','','']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project?',
        },
    ]);
};
promptReadmeQuestions().then(answers => console.log(answers));

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
