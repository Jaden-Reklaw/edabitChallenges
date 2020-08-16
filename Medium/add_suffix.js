/*
All About Anonymous Functions: Adding Suffixes
Write a function that returns an anonymous function, 
which transforms its input by adding a particular 
suffix at the end.

Examples
add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞"totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless"

*/

const add_suffix = suffix => prefix =>  prefix + suffix;

function add_suffix(suffix) {
	return function(y){
		return y + suffix;
	}
}