let numberOne = 10;
let numberTwo = 15;

let updateNumbers: Function;
let addNumbers: Function;

updateNumbers = (updatedNumberOne: number, updatedNumberTwo: number): void => {
	numberOne = updatedNumberOne;
	numberTwo = updatedNumberTwo;
}

addNumbers = (numberOne: number, numberTwo: number): number => {
	return numberOne + numberTwo;
}

console.log(addNumbers(numberOne, numberTwo));

console.log('lets update the numbers!');
updateNumbers(20, 30);

console.log(addNumbers(numberOne, numberTwo));