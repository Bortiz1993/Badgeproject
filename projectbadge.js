var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter your first number ");
var secondNum = readlineSync.questionInt("Please enter your second number ");
var enteredOperation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ");

function addNumbers(num1, num2){
    return num1 + num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function divideNumbers(num1, num2){
    return num1 / num2;
}

function myCalculator(num1, num2, operation){
    if (operation == "add"){
        console.log("Adding Number-1: " + num1 + " with Number-2: " + num2 + " returns a result of: " + addNumbers(num1, num2));
    
    }  
    else if (operation == "sub"){
       console.log("Subtracting Number-1: " + num1 + " with Number-2: " + num2 + " returns a result of: " + subtractNumbers(num1, num2));

    }
    else if (operation == "mul"){
        console.log("Multiply Number-1: " + num1 + " with Number-2: " + num2 + " returns a result of: " + multiplyNumbers(num1, num2));

    }
    else if (operation == "div"){
        console.log("Divide Number-1: " + num1 + " with Number-2: " + num2 + " returns a result of: " + divideNumbers(num1, num2));

    }
    else{
        console.log("The operation is invalid. Please try again!");
    }
 }

myCalculator(firstNum, secondNum, enteredOperation);