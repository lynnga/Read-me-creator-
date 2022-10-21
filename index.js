// TODO: Include packages needed for this application
let inquirer = require("inquirer")
let generateMarkdown = require("./utils/generateMarkdown")
let fs=require("fs")
// TODO: Create an array of questions for user input
const questions = [{
    type: "input", 
    name: "title",
    message: "please enter a title"
    
},
{
    type: "input", 
    name: "description",
    message: "Short description on your project."
    

},
{
    type: "input", 
    name: "installation",
    message: "What steps and programes are required to install project"
    

},
{
    type: "input", 
    name: "usage",
    message: "Provide instrucations and examples for use."
    

},
{
    type: "input", 
    name: "contribution",
    message: "Steps others can use to contribute to your project."
    

},
{
    type: "input", 
    name: "test",
    message: "Provide a test and how to run them."
    

},
{
    type: "input", 
    name: "questions",
    message: "Provide a email and github account."
    

},
{
    name: "license",
    type: "list",
    message: "Choose your license:",
    choices: ["MIT", "GPL", "BSD"],
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./output/${fileName}`, data,(error)=>{
        if(error) console.error(error)
        console.log("readme Generated Succesfully")
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answer) => {
    console.log(answer);
   let generatedReadMe= generateMarkdown(answer);
  writeToFile("readMe.md",generatedReadMe)
  });
}

// Function call to initialize app
init();
