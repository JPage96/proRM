// TODO: Include packages needed for this application

const fs = require('fs'); 
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your email address.');
                    return false;
                }    
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your project name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub username.');
                    return false;
                }    
            }
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
