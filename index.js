function mindGame(number) {

	//This function takes a positive number as input, performs the calculation  multiply the number by 3 and store into the multiplication variabe, then adding 10 with the multiplication variable and store into the addition variable, then divide addition by 2 and store division variable, then subtract 5 from the division variable and store into the subtruction variable.Finally returns the subtruction which is return the output.

	let multiplication = number * 3;
	let addition = multiplication + 10;
	let division = addition / 2;
	let subtruction = division - 5;
	return subtruction;
}


function evenOdd(string) {

	// The evenOdd() function takes a string as input.Then it calculates the number of character in the string by string.length and based on if the caracter number is divisible by 2 its returns the string 'even', otherwise its returns the string 'odd'.

	const character = string.length;
	if (character % 2 === 0) {
		return 'even';
	}
	else {
		return 'odd';
	}

}

function isLGSeven(number) {

	//The function isLGSeven() takes a number as a input.Then calculates the difference among the number and 7. Then check weather the difference is less than 7 and if true return the difference.Otherwise return the double of input number.

	if ((number - 7) < 7) {
		return (number - 7);
	}
	else {
		return (number * 2);
	}
}

function findingBadData(numbers) {

	//The function findingBadData() takes as input array named numbers.In this function calculates badData.Initially I set the value of badData is 0.Then using for loop I accessed the array element of the array.If the element is less than zero or a negative number that is badData.If the function find any negative number then increase the badData value by 1. Visit the total array using loop,finally the function return the number of badData which is the output.

	let badData = 0;
	for (let i = 0; i < numbers.length; i++) {
		let element = numbers[i];
		if (element < 0) {
			badData++;
		}
	}
	return badData;
}

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {

	// The function gemsToDiamond takes three input parameter firstFriendGems, secondFriendGems and thirdFriendGems. then calculate Diamond multiply firstFriendGems by 21, secondFriendGems by32 and thirdFriendGems by 43.Then calculate totalDiamond.Then check weather totalDiamond is greater than double of 1000? if true subtract 2000 from the totalDiamond and return totalDiamond.Otherwise return totalDiamond.

	let firstFriendDiamonds = firstFriendGems * 21;
	let secondFriendDiamonds = secondFriendGems * 32;
	let thirdFriendDiamonds = thirdFriendGems * 43;
	let totalDiamond = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
	if (totalDiamond > (1000 * 2)) {
		totalDiamond -= 2000;
		return totalDiamond;
	}
	else {
		return totalDiamond;
	}
}