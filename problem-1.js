function mindGame(number) {

	//This function takes a positive number as input, performs the calculation  multiply the number by 3 and store into the multiplication variabe, then adding 10 with the multiplication variable and store into the addition variable, then divide addition by 2 and store division variable, then subtract 5 from the division variable and store into the subtruction variable.Finally returns the subtruction which is return the output.

	if ((typeof number !== 'number')|| ( number<0)) {
		return "please input only positive number";
	}

	let multiplication = number * 3;
	let addition = multiplication + 10;
	let division = addition / 2;
	let subtruction = division - 5;
	return subtruction;
}

console.log(mindGame(5));