function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
	let friendFriendDiamonds = firstFriendGems * 21;
	let secondFriendDiamonds = secondFriendGems * 32;
	let thirdFriendDiamonds = thirdFriendGems * 43;
	let totalDiamond = friendFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
	if (totalDiamond > (1000*2)) {
		totalDiamond -= 2000;
		return totalDiamond;
	}
	else {
		return totalDiamond;
	}
}

console.log(gemsToDiamond(20,200,50));