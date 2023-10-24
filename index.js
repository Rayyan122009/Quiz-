import inquirer from "inquirer";
import chalk from "chalk";
var quiz = await inquirer.prompt([
    {
        type: "input",
        name: "quiz",
        message: "What is your name"
    }
]);
console.log(`${chalk.greenBright.bold(quiz.quiz)}`);
do {
    let levels = await inquirer.prompt([{
            type: "list",
            name: "level",
            message: "Choose your term",
            choices: ["level 1", "level 2", "level 3", "level 4", "Exit"]
        }]);
    if (levels.level == "level 1") {
        var q1 = await inquirer.prompt([{
                type: "list",
                message: `${quiz.quiz} what is the hardest computer language ever `,
                name: "quesion1",
                choices: ["Java", "Python", "C++"]
            }]);
        if (q1.quesion1 == "Java") {
            console.log("Correct Answer");
        }
        else if (quiz.quesion1 == "C++", "Python") {
            console.log("Wrong Answer");
        }
    }
    if (levels.level == "level 2") {
        var q2 = await inquirer.prompt([{
                type: "list",
                message: `${quiz.quiz} Who invented the computer`,
                name: "quesion2",
                choices: ["Charles Babbage", "David Copperfield", "Mark Zuckerberg"]
            }]);
        if (q2.quesion2 == "Charles Babbage") {
            console.log("Correct Answer");
        }
        else if (q2.quesion2 == "David Copperfield", "Mark Zuckerberg") {
            console.log("Wrong Answer");
        }
    }
    if (levels.level == "level 3") {
        var q3 = await inquirer.prompt([{
                type: "list",
                message: `${quiz.quiz} "Who is the powerful country in the Asia"`,
                name: "quesion3",
                choices: ["Russia", "Pakistan", "India"],
            }]);
        if (q3.quesion3 == "Russia") {
            console.log("Correct Answer");
        }
        else if (q3.quesion3 == " Pakistan", "India") {
            console.log("Wrong Answer");
        }
    }
    if (levels.level == "level 4") {
        var q4 = await inquirer.prompt([{
                type: "list",
                message: `${quiz.quiz} Who made the twiter`,
                name: "quesion4",
                choices: ["Jack Dorsey", "John", "Elon Musk"],
            }]);
        if (q4.quesion4 == "Jack Dorsey") {
            console.log("Correct Answer");
        }
        else if (q4.quesion4 == "John", "Elon Musk") {
            console.log("Wrong Answer");
        }
    }
    if (levels.level == "Exit") {
        process.exit();
    }
} while (true);
