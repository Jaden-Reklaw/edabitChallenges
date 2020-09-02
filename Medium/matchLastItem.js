/*
Match the Last Item
Create a function that takes an array of items and 
checks if the last item matches the rest of the 
array.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

Notes
The array is always filled with items.
*/

//My answer
const matchLastItem = arr => arr.filter((item) => {if(item !== arr[arr.length -1]) {
    return String(item);
  }}).join('') === arr[arr.length -1];

//Did not think to use pop then join the rest of the array
const matchLastItem = arr => arr.pop() === arr.join("");