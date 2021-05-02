// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
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
      name: "features",
      message: "What are the features of this project?", 
      validate: inputVal
   },
   {
      type: "input",
      name: "contribute",
      message: "How can others contribute to your project?", 
      validate: inputVal
   },
   {
      type: "input",
      name: "tests",
      message: "Please provide instructions in testing your project.", 
      validate: inputVal
   },
];

// Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
      if (err) {
      return console.log(err);
   }
   console.log('README.md created.')
   });
}

// Create writeFile method using promises instead of a callback function
const writeFilePromise = util.promisify(writeToFile);

// Create a function to initialize app
async function init() {
   try{
      const data = await inquirer.prompt(questions);
      console.log("Saved Responses:", data);

      // Write markdown
      markdown = generateMarkdown(data);
      console.log("Generating your markdown");
      await writeFilePromise(`sample.md`, markdown);

   }
   catch(error){
      console.log(error);
   }
}

// Function call to initialize app
init();
