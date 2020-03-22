/*
Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

Examples
"apples and bananas".vreplace("u") ➞ "upplus und bununus"

"cheese casserole".vreplace("o") ➞ "chooso cossorolo"

"stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
Notes
Words will be lowercased.

Helpful comments
So, if you're looking to extend a String, one format to follow is:

String.prototype.<extended_function_name> = function(<arguments>) { code }

String.prototype.vreplace

this gives you an array
*/

String.prototype.vreplace = function(vowel) {
	let sentence = this;
	let str = '';
	
	for(let letter of sentence){
		str += letter;
	}
	return str = str.replace(/[aeiouy]/g, vowel);
}

//Other way don't understand how "this" is just a string when it returns an array
String.prototype.vreplace = function(vowel) {
	return this.replace(/[aeiou]/g, vowel)
}




