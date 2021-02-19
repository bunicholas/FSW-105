var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter your first number:");
var secondNum = readlineSync.questionInt("Please enter your second number:");
var enteredOperation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ");

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

function divideTwoNumbers(num1, num2){
    return num1 / num2;
}

function myCustomCalculator(num1, num2, operation){
    if (operation == "add"){
        console.log("Adding Number-1: " + num1 + "with Number-2: " + num2 + " returns a result of: " + addTwoNumbers(num1, num2));
}
else if (operation == "sub"){
    console.log("Subtracting Number-1: " + num1 + " with Number-2: " + num2 + " returns a result of: " + subtractTwoNumbers(num1, num2));
}
else if (operation == "mul"){
    console.log("Multipling Number-1: " + num1 + "with Number-2: " + num2 + " returns a result of: " + multiplyTwoNumbers(num1, num2));
}
else if (operation == "div"){
    console.log("Dividing Number-1: " + num1 + "with Number-2: " + num2 + " returns a result of: " + divideTwoNumbers(num1, num2));
}
else {
    console.log("Your operation is invalid. Please try again!");
}
}
myCustomCalculator(firstNum, secondNum, enteredOperation);
