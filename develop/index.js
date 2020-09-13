const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./utils/generateMarkdown");
const util = require("util");

const writeFileSync = util.promisify(fs.writeFile);

// array of questions for user
function prompt(){
   return inquirer.prompt([
   {
      name: "title",
      message: "what is the title of the project?",
      type: "input"
   },
   {
      name: "description",
      message: "Describe the project",
      type: "input"
   },
   {
      name: "installation",
      message: "what are the steps for installation?",
      type: "input"
   },
   {
      name: "use",
      message: "What are the steps for using the app?",
      type: "input"
   },
   {
      name: "test",
      message: "What are the steps for testing the app?",
      type: "input"
   },
   {
      name: "contributors",
      message: "Enter the names of everyone who contributed on this project",
      type: "input"
   },
   {
      name: "GitUsername",
      message: "Enter your github username",
      type: "input"
   },
   {
      name: "email",
      message: "What email is associated with this project?",
      type: "input"
   },
   {
      name: "url",
      message: "What is the URL for your app",
      type: "input"
   },
   {
      name: "license",
      message: "did you use any of these licenses?",
      type: "list",
      choices: [
         "Apache",
         "ISC",
         "GPL",
         "MIT",
         "None"
      ]
   },
]);
};
// function to write README file

function writeToFile(fileName, data){
   return fs.writeFileSync(fileName, data);
}

// function to initialize program

async function init() {

   try {
     const answers = await prompt();
 
     const readme = render(answers);
 
     await writeFileSync("README.md", readme);
 
   } catch (err) {
     console.log(err);
   }
 }
// function call to initialize program
init();
