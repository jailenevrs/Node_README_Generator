// TODO: Include packages needed for this application
const inquirer=require("inquirer");
const fs= require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        name:"Title",
        message: "What is the title of your project?",
        type:"text"

    },
    { name: "Description",
    message: "What is the motivation or reason for your project?",
    type:"text"
    },
    {
        name:"Table of Contents",
        message:"Add table contents",
        type:"text"
    },
    {
        name:"Installation",
        message:"What is needed to install your project?",
        type:"text"

    },
    {
        name:"Usage",
        message:"What are instructions for project use?",
        type:"text"
    },
    {
        name:"Contributing",
        message:"How can someone fork, clone and set up repo?",
        type:"text"
    },
    {
        name:"license",
        message:"Which license was used?",
        type:"list",
        choices:['Apache','BSD3','MIT','None']
    },
    {
        name:"Tests",
        message:"Give explicit instruction on how to run test",
        type:"text"
    },
    {
        name:"questions",
        message:"What is your github username and your email address? "
    }
]
function renderLicenseBadge(license) {
    if (license && typeof license === "string" && license !== "None"){
      return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`
    }{
      return "";
    }
}

const readmeTemplate = (response) => {
return `# ${response.Title}
${renderLicenseBadge(response.license)}
## Description 
${response.Description} 
## Table of Contents
[Description] (#Description)
[Installation] (#Installation)
[Usage] (#Usage)
[License] (#License)
[Contributing] (#Contributing)
[Tests] (#Tests)
[License] (#License)
## Installation
${response.Installation}
## Usage
${response.Usage}
## Contributing
${response.contributing}
## License
[${response.license}](https://opensource.org/licenses/${response.license})`
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)// TODO: Create a function to write README file
    .then(response=>{
        fs.writeFile("README.md",readmeTemplate(response),
        error=>{
            if(error){
                console.log(error);
            } else (console.log("response saved succesfully!"))
        });
    });
}

// Function call to initialize app
init();
