const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project.',
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Provide instructions about how to install this project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What command do you use to launch this app?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List all the people who worked on this app.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If someone wants to contribute to this app, what should they do?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any tests the user can users can run to try out your app?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your email so users can contact you with questions.',
        },
        {
            type: 'checkbox',
            name: 'licenseSelect',
            message: 'This is a placeholder message',
            choices: ['MIT', 'CSS', 'JavaScript', 'MySQL'],
        },
        {
            type: 'input',
            name: 'copyrightYear',
            message: 'What is the year you created this app?',
        },
        {
            type: 'input',
            name: 'CopyrightName',
            message: 'What name should the copyright for this app belong to?',
        },
        
        

    ])

    .then((data) => {
        console.log(data);

        console.log(data.projectTitle);


    });