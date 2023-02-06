function evenOdd(string) {
	   const character = string.length;
		if (character % 2 == 0) {
			return 'even';
		}
		else {
			return 'odd';
		}
		
}

let string = 'chatgpt';
let input = evenOdd(string);
console.log(input);