const inquirer = require('inquirer');
const fs = require('fs');
let chosenLicense

const generateReadme = (data) =>
    `
    # Project Title 
    ${data.projectTitle}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)
    
    
    ## Instillation
    You can activate this app by ${data.installation}
    
    ## Usage
    Stock usage text -  ${data.usage} 
    
    ## Contributing
    Stock usage text -  ${data.usage}
    
    ## Tests
    Stock usage text -  ${data.test} 
    
    ## Questions
    Stock usage text -  ${data.questions} 
    
    ## License 
    Copyright ${data.copyrightYear}  ${data.copyrightName}
    ${chosenLicense}
    
    
    `; // end of the template

// License templates
let licMit = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;




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
            type: 'list',
            name: 'licenseSelect',
            message: 'This is a placeholder message',
            choices: ['MIT', 'Apache', 'GNU',],
        },
        {
            type: 'input',
            name: 'copyrightYear',
            message: 'What is the year you created this app?',
        },
        {
            type: 'input',
            name: 'copyrightName',
            message: 'What name should the copyright for this app belong to?',
        },



    ])

    .then((data) => {
        console.log(data);
        console.log(data.projectTitle);
        const writeReadme = generateReadme(data);

        switch (data.license) {
            case 'MIT':
                chosenLicense = licMit
                break;
                case 'Apache':
                chosenLicense = licApache
                break;
                case 'GNU':
                chosenLicense = licGnu
                break;
        }

        const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile(filename, writeReadme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });