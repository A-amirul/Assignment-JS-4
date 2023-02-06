function evenOdd(string) {
	   const element = string.length;
		if (element % 2 == 0) {
			return 'Even';
		}
		else {
			return 'Odd';
		}
		
}

let string = 'chatgpt1';
let input = evenOdd(string);
console.log(input);