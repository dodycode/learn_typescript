"use strict";
var numberOne = 10;
var numberTwo = 15;
var updateNumbers;
var addNumbers;
updateNumbers = function (updatedNumberOne, updatedNumberTwo) {
    numberOne = updatedNumberOne;
    numberTwo = updatedNumberTwo;
};
addNumbers = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};
console.log(addNumbers(numberOne, numberTwo));
console.log('lets update the numbers!');
updateNumbers(20, 30);
console.log(addNumbers(numberOne, numberTwo));
