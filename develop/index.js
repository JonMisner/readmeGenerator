const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
   {
      name: "title",
      prompt: "what is the title of your project?",
      type: "input"
   },
   {
      name: "discription",
      prompt: "Describe your project",
      type: "input"
   },
   {
      name: "installation",
      prompt: "what are the steps for installation?",
      type: "input"
   },
   {
      name: "usage",
      prompt: "What are the steps for using your app?",
      type: "input"
   },
   {
      name: "contributors",
      prompt: "Enter the names of everyone who contributed on this project",
      type: "input"
   },
   {
      name: "username",
      prompt: "Enter your github username",
      type: "input"
   },
   {
      name: "email",
      prompt: "What email is associated with this project?",
      type: "input"
   },
   {
      name: "username",
      prompt: "Enter your github username",
      type: "input"
   },
   {
      name: "url",
      prompt: "What is the URL for your app",
      type: "input"
   },
   {
      name: "liscense",
      prompt: "did you use any of these licenses?",
      type: "list",
      choices: [
         "Apache 2.0",
         "ISC",
         "GPL 3.0",
         "MIT",
         "None"
      ]
   },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
