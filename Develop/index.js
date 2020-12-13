
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown')
//console.log(inquirer)

const promptReadmeQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter GitHub link (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('Please enter your GitHub link');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Steps required to install your project?',
    },
    {
      type: 'confirm',
      name: 'confirmUsage',
      message: 'do you have a screenshot of your project?',
      default: true
    },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 
    // }
    {
      type: 'input',
      name: 'contributors',
      message: 'who contributed on your project?',
    },
    {
      type: 'checkbox',
      name: 'licence',
      message: 'do you have a licence for your project?',
      default: false,
      choices: ['MIT', 'ISC', 'GNU Public License v3.0', 'Apache License 2.0', 'The Unlicense']
    },
  ]);
};
promptReadmeQuestions().then(answers => {

  console.log(answers)
  const data = generateMarkdown(answers)
  fs.writeFile("README.md", data, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  })
});

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
