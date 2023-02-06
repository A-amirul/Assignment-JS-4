function isLGSeven(number) {
	if (number < 7) {
		let value = number-7;
		return value;
	}
	else {
		value = number * 2;
		return value;
	}
}

console.log(isLGSeven(15));