function isLGSeven(number) {

	//The function isLGSeven() takes a number as a input.Then calculates the difference among the number and 7. Then check weather the difference is less than 7 and if true return the difference.Otherwise return the double of input number.

	if (typeof number !== 'number') {
		return 'please input as a valid number';
	}

	if ((number - 7) < 7) {
		return (number - 7);
	}
	else {
		return (number * 2);
	}
}

console.log(isLGSeven(6));