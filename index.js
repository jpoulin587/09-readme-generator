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
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        {
            type: 'input',
            name: 'placeholderName',
            message: 'This is a placeholder message',
        },
        
        

    ])

    .then((data) => {
        console.log(data);

        console.log(data.projectTitle);


    });