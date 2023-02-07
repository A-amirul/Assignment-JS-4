function evenOdd(string) {

	// The evenOdd() function takes a string as input.Then it calculates the number of character in the string by string.length and based on if the caracter number is divisible by 2 its returns the string 'even', otherwise its returns the string 'odd'.
    
	if (typeof string != 'string') {
		return "please input as a valid string";
	}
	const character = string.length;
	if (character % 2 === 0) {
		return 'even';
	}
	else {
		return 'odd';
	}

}

let string = 'chatgpt';
let input = evenOdd(string);
console.log(input);