/*

*/

//My answer
const transformUpvotes = str => str.split(' ').map(num => num[num.length - 1] === 'k' ? Number(num.replace('k', '')) * 1000 : Number(num));

//Other answers using endsWith funciton
function transformUpvotes(str) {
	return str.split(' ')
		.map(a => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}

//Wish I would have thought of this
const transformUpvotes = s => s.split(" ").map(x => +(x.replace(".", "").replace("k", "00")));


    
