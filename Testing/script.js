console.log('test');

function consecOnes(array) {
	let arr = array.join().replace(",", "");
	console.log('arr is',arr);
}


consecOnes([1,0,1,1,1,1,1,0,1,1]);