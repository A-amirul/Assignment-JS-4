function findingBadData(numbers) {

	//The function findingBadData() takes as input array named numbers.In this function calculates badData.Initially I set the value of badData is 0.Then using for loop I accessed the array element of the array.If the element is less than zero or a negative number that is badData.If the function find any negative number then increase the badData value by 1. Visit the total array using loop,finally the function return the number of badData which is the output.

	if (typeof numbers !== 'object') {
		return 'please input a valid array with numbers';
	}

	let badData = 0;
	 for (let i = 0; i < numbers.length; i++) {
		 let element = numbers[i];

		 if (typeof element !== 'number') {
			 return 'please input a valid array with numbers';
		 }

		else if (element < 0) {
			badData++;
		}
	}
	return badData;
}

let numbers = 23;
let value = findingBadData(numbers);
console.log(value);