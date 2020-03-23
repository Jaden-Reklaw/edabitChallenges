/*
Create a function that takes in an array (slot machine outcome)
and returns true if all elements in the array are identical, and
false otherwise. The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
Notes
The elements must be exactly identical for there to be a jackpot.
*/

function testJackpot(result) {
	for(let item of result) {
		if(item !== result[0]) {
			return false;
		}
	}
	return true;
}

//Other way
function testJackpot(result) {
  return result.every(x => x === result[0]);	
}

