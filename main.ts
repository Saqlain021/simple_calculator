#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {message: "enter your's first number : ", type: "number", name: "firstNumber"},
    {message: "enter your's second number :", type: "number", name: "secondNumber"},
    {message:"choose differt operator given in below :", type : "list",name :"operator" ,choices:["addition","subtraction","multiplication","division"]},
]);
if (ans.operator === "addition"){
    console.log(ans.firstNumber + ans.secondNumber);
}
else if (ans.operator ==="subtraction"){
    console.log(ans.firstNumber - ans.secondNumber);
}
else if (ans.operator === "multiplication"){
    console.log(ans.firstNumber * ans.secondNumber);
}
else if (ans.operator === "division"){
    console.log(ans.firstNumber / ans.secondNumber);
}
else {
    console.log("invalid input");
}