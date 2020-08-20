//My Answer
const alphNum = str => {
	const letterToNumbers = {};
  for(let i=0; i < 26; i++) {
    letterToNumbers[String.fromCharCode(65 + i)] = i;
  }
  return str.split('').map(letter => letterToNumbers[letter]).join(' ');
}

//Smarter way of doing my answer
const alphNum = str => [...str].map(value => value.charCodeAt() - 65).join(' ');

//Another genius way
function alphNum(str) {
	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return str.split('').map(x => letters.indexOf(x)).join(' ');
}