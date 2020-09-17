/*
Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another character.

a = 1
e = 2
i = 3
o = 4
u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"

Notes
The input will always be in lowercase.
*/

//My answer
const replaceVowel = (word) => word.split('').map(letter => letter === 'a' ? 1: letter === 'e' ? 2 : letter === 'i' ? 3 : letter === 'o'? 4 : letter === 'u' ? 5 : letter).join('');

//Other Solution using regular expression
function replaceVowel(word){
	return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
}

//Other solution using objects
//Helpful resource on in operator
function replaceVowel(word){
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  	return [...word].map(i => i in vowels ? vowels[i] : i).join('');
}