// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');



// Validation

let inputVal = (input) => {
   return (!input || input.trim() === "" ? "This field is required. Please try again" : true);
};

let emailRegex = (input) => {
   return (input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? true : "Please enter a valid email address");
};

// Create an array of questions for user input
const questions = [
   {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?", 
      validate: inputVal
   },    
   {
      type: "input",
      name: "firstName",
      message: "What is your first name?",    
      validate: inputVal
   }, 
   {
      type: "input",
      name: "lastName",
      message: "What is your last name?", 
      validate: inputVal
   },
   {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: emailRegex
   },
   {
      type: 'input',
      name: 'repository',
      message: 'Please enter your repository name on GitHub.',
      validate: inputVal
   }, 
   {
      type: "input",
      name: "title",
      message: "Please write the title of this project.", 
      validate: inputVal
   },
   {
      type: "input",
      name: "description",
      message: "Please write a description for this project.", 
      validate: inputVal
   },
   {
      type: "input",
      name: "installation",
      message: "How do you install the project?", 
      validate: inputVal
   },
   {
      type: "input",
      name: "usage",
      message: "What is the usage guidelines for the project?", 
      validate: inputVal
   },
   {
      type: "list",
      message: "Which open source license are you using?",
      name: "license",
      choices: ["Apache", "GNU GPLv3", "MIT"],
   },
   {
      type: "input",
      name: "usage",
      message: "What are the features of this project?", 
      validate: inputVal
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, JSON.stringify(data), (err) => {
      if(err){
         return console.log(err);
      }
      console.log("Success! ReadMe.md file created.");
   });
}

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
   try{
      const data = await inquirer.prompt(questions);
      console.log("Saved Responses:", answers);

      //Write markdown
      markdown = writeToFile();
      console.log("Generating your markdown")
      await writeFileAsync(`README.md`);

   }
   catch{
      return console.log("Error");
   }
}

// Function call to initialize app
init();
