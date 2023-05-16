
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet"
import chalkAnimation from "chalk-animation";
import { type } from "os";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 4000)
    })
}

const name = await inquirer.prompt({
    type: 'input',
    name: 'username',
    message: 'What is your Name'
})

let tital = chalkAnimation.neon((figlet.textSync(`Wellcome ${name.username}`)))
await sleep();
tital.stop();
const Wellcome=  chalkAnimation.rainbow(`Let's start the calculation ${name.username}`)
   await sleep();
   Wellcome.stop();

const askQuestion = async () => {

    const answer =
        await inquirer.prompt([
            {
                name: "Operator",
                type: 'list',
                choices: ['Multiplication', 'Subtraction', 'Divition', 'Sum'],
                message: "Select the operator which you want to perform:",
            },
            {
                name: 'input1',
                type: "number",
                message: "Enter your first Number: "
            },
            {
                name: "input2",
                type: "number",
                message: "Enter your second Number:",
            },

        ]);
    const { input1, input2, Operator } = answer;
    let result: number = 0;
    if (input1 && input2 && Operator) {
        if (Operator === 'Sum') {
            result = input1 + input2;
        } else if (Operator === 'Subtraction') {
            result = input1 - input2
        }
        else if (Operator === 'Divition') {
            result = input1 / input2;
        }
        else if (Operator === 'Multiplication') {
            result = input1 * input2;
        }
        let stop = chalkAnimation.rainbow(`your answer is =  ${(result)} `);
        await sleep();
        stop.stop();
    }
    else {
        let error = chalkAnimation.pulse("Enter the vaild Number");
        await sleep();
        error.stop();
    }
}
const startagain = async () => {
    do {
        await askQuestion();
        var restart = await inquirer.prompt({
            type: 'input',
            name: 'again',
            message: `Did you want to calculate again press y otherwise n: ( y/n )`
        })

    } while (restart.again === 'y' || restart.again === 'Y' || restart.again === 'yes' || restart.again === 'YES' || restart.again === 'yea')
}
startagain()