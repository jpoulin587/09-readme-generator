const inquirer = require('inquirer');
const fs = require('fs');




inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'city',
            message: 'In what city are you located?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Tell a little about yourself.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },

    ])

    .then((data) => {
        console.log(data);

        console.log(data.name);