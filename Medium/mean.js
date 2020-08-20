/*

*/

//My answer
const mean = num => String(num).split('').reduce((acc, i) => Number(acc) + Number(i)) / String(num).length;

//Other answer
function mean(num) {
	return [...String(num)].reduce((a,c) => a + +c, 0) / String(num).length;
}