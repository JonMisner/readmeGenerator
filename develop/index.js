const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./utils/generateMarkdown");
const util = require("util");

const writeFileSync = util.promisify(fs.writeFile);

// array of questions for user
// const questions = 
function prompt(){
   return inquirer.prompt([
   {
      name: "title",
      prompt: "what is the title of the project?",
      type: "input"
   },
   {
      name: "discription",
      prompt: "Describe the project",
      type: "input"
   },
   {
      name: "installation",
      prompt: "what are the steps for installation?",
      type: "input"
   },
   {
      name: "use",
      prompt: "What are the steps for using the app?",
      type: "input"
   },
   // {
   //    name: "test",
   //    prompt: "What are the steps for testing the app?",
   //    type: "input"
   // },
   // {
   //    name: "contributors",
   //    prompt: "Enter the names of everyone who contributed on this project",
   //    type: "input"
   // },
   // {
   //    name: "username",
   //    prompt: "Enter your github username",
   //    type: "input"
   // },
   // {
   //    name: "email",
   //    prompt: "What email is associated with this project?",
   //    type: "input"
   // },
   // {
   //    name: "url",
   //    prompt: "What is the URL for your app",
   //    type: "input"
   // },
   // {
   //    name: "liscense",
   //    prompt: "did you use any of these licenses?",
   //    type: "list",
   //    choices: [
   //       "Apache 2.0",
   //       "ISC",
   //       "GPL 3.0",
   //       "MIT",
   //       "None"
   //    ]
   // },
]);
};
// function to write README file
function writeToFile(fileName, data){
   return fs.writeFileSync(fileName, data);
}

// function to initialize program
// function init() {
//inquire prompt, then grab answers from the promise and use your write file function 
// const data = inquirer
//    .prompt(questions.forEach(question.prompt))
//    .then (generateMarkdown(data));

async function init() {

   try {
     const answers = await prompt();
 
     const readme = render(answers);
 
     await writeFileSync("README.md", readme);
 
     console.log("Successfully wrote to test.md");
   } catch (err) {
     console.log(err);
   }
 }
 
// }

// function call to initialize program
init();
