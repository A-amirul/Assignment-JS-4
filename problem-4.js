function findingBadData(numbers) {
	let badData = 0;
	for (let i = 0; i < numbers.length; i++){
		let element = numbers[i];
		if (element < 0) {
			badData++;
		}
	}
	return badData;
}

let numbers = [-4, -9, -5, 33, 55];
let value = findingBadData(numbers);
console.log(value);