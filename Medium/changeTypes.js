/*
Changing Mixed Types
Create a function that changes all the elements in an array as follows:

Add 1 to all even integers, nothing to odd integers.
Concatenates "!" to all strings and make the first letter of the word a capital letter.
Changes all boolean values to its opposite.
Examples
changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]

Notes
There won't be any float values.
You won't get strings with both numbers and letters in them.
Although the task may be easy, try keeping your code as clean and as readable as possible!
*/

//My Answer
const changeTypes = (arr) => arr.map(item => {
    if (typeof item === "boolean"){
      return !item;
    } else if(typeof item === 'string') {
      return item.charAt(0).toUpperCase() + item.slice(1) + '!';
    } else if(item%2 === 0) {
      return item+1;
    } else {
      return item;
    }
});

//Other Answer
const changeTypes = arr =>
arr.map(el => typeof el === 'string' ? el.charAt(0).toUpperCase() + el.slice(1) + '!' :
							typeof el === 'boolean' ? !el :
							el % 2 === 0 ? el += 1 : el);