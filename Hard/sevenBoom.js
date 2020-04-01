function sevenBoom(arr) {
	let joinArray = arr.join('');
	for(let num of joinArray) {
		if(num === '7') {
			return 'Boom!';
		}
	}
	return 'there is no 7 in the array'
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([2, 55, 60, 97, 86]);
sevenBoom([8, 6, 33, 100]);