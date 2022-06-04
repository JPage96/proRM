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
                    console.log('Enter your project name.');
                    return false;
                }    
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a description of your project.');
                    return false; 
                }
            }
        }, 
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license does you your project need?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Choose a license.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What steps are required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter the steps required to install your project.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter app use instructions.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What command should be entered to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What should the user need to know about adding to the repo?'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
