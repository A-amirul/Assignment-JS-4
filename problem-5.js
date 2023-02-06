function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
	
// The function gemsToDiamond takes three input parameter firstFriendGems, secondFriendGems and thirdFriendGems. then calculate Diamond multiply firstFriendGems by 21, secondFriendGems by32 and thirdFriendGems by 43.Then calculate totalDiamond.Then check weather totalDiamond is greater than double of 1000? if true subtract 2000 from the totalDiamond and return totalDiamond.Otherwise return totalDiamond.

	let firstFriendDiamonds = firstFriendGems * 21;
	let secondFriendDiamonds = secondFriendGems * 32;
	let thirdFriendDiamonds = thirdFriendGems * 43;
	let totalDiamond = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
	if (totalDiamond > (1000*2)) {
		totalDiamond -= 2000;
		return totalDiamond;
	}
	else {
		return totalDiamond;
	}
}

console.log(gemsToDiamond(20,200,50));