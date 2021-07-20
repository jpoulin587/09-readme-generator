const inquirer = require('inquirer');
const fs = require('fs');
let chosenLicense

const generateReadme = (data) =>
    `
# ${data.projectTitle}

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
You can activate this app by ${data.installInstructions}

## Usage
You can make use of this app by following these directions:  ${data.usage} 

## Contributing
You can find this project on GitHub at the following link:
${data.gitHubLink}

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

These steps are unique to this project:
${data.contributing}

## Questions
If you have any questions or comments about this app please send me an email at: ${data.questions} 

## License 
Copyright (C) ${data.copyrightYear}  ${data.copyrightName}
${chosenLicense}

`; // end of the template

// License templates
let licMit = `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

let licApache = `
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;

let licGnu = `
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
`




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
            name: 'gitHubLink',
            message: 'Provide a link to the GitHub repo for this project.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If someone wants to contribute to this app, what should they do?',
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

        switch (data.licenseSelect) {
            case 'MIT':
                chosenLicense = licMit;
                //console.log(chosenLicense);
                break;
            case 'Apache':
                chosenLicense = licApache;
                break;
            case 'GNU':
                chosenLicense = licGnu;
                break;
        }
        const writeReadme = generateReadme(data);

        const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile(filename, writeReadme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });