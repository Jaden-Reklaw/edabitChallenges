/*
Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed 
to the function. For example, if the input is 4 then
your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

//Obvious Way to do this
// function addUp(num =1) {
// 		var n = 0;
// 		var acc = 0;

// 		while (n < num) {
// 			n++;
// 			acc += n;
// 		}
// 	return acc;
// }

//Uses recursion
function addUp(num) {
 	debugger;
	if (num === 1) return 1;
	return num + addUp(num - 1);
}



