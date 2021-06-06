const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamArray = [];
const generateHTML = require("./src/generatehtml")

const createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What the manager's name.",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter the name."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's ID?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter an ID number."
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
            validate: data => {
                if(data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Please enter a number."
            }
        },
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'What school does the intern attend?'],
        },

    ]).then((answers) => {
        const manager = new Manager(
            answers.name, 
            answers.id,
            answers.email,
            answers.officeNumber
            );
        teamArray.push(manager)
        let willContinue = answers.teamMember !== 'No';
        let employeeType = answers.teamMember;

        if (!willContinue) {
            writeHTML();
            return;
        }

        while (willContinue) {
            if (employeeType === 'Engineer') {
                createEngineer();
            }
            else if (employeeType === 'Intern') {
                createIntern();
            }
            else if (employeeType === 'Manager'){
                createManager();
            }
            return
        }
        console.log(teamArray);
        
        // createTeam();
    });
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter the name."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter an ID."
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            validate: data => {
                if(data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school did/does the intern attend?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter the school name."
            }
        },
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },

    ]).then((answers) => {
        const intern = new Intern(
            answers.name, 
            answers.id,
            answers.email,
            answers.school
            );
            teamArray.push(intern)
            let willContinue = answers.teamMember !== 'No';
            let employeeType = answers.teamMember;

            if (!willContinue) {
                writeHTML();
                return;
            }

            while (willContinue) {
                if (employeeType === 'Engineer') {
                createEngineer();
            }
                else if (employeeType === 'Intern') {
                createIntern();
            }
                else if (employeeType === 'Manager'){
                createManager();
            }
            return
        }
            console.log(teamArray);
        // createTeam();
    });
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter a name."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter an ID."
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
            validate: data => {
                if(data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?",
            validate: data => {
                if(data !== ""){
                    return true
                } 
                return "Enter an username."
            }
        },
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },

    ]).then((answers) => {
        const engineer = new Engineer(
            answers.name, 
            answers.id,
            answers.email,
            answers.github
            );
            teamArray.push(engineer)
        let willContinue = answers.teamMember !== 'No';
        let employeeType = answers.teamMember;

        if (!willContinue) {
            writeHTML();
            return;
        }

        while (willContinue) {
            if (employeeType === 'Engineer') {
                createEngineer();
            }
            else if (employeeType === 'Intern') {
                createIntern();
            }
            else if (employeeType === 'Manager'){
                createManager();
            }
            return
        }
            console.log(teamArray);
        // createTeam();
    });
}

createManager();

const writeHTML = () => {
    fs.writeFile('index.html', generateHTML(teamArray), (err) =>
    err ? console.log(err) : console.log('Successfully created index.html'))
}