/*
Capitalize the Names
Create a function that takes an array of names 
and returns an array where only the first letter 
of each name is capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ 
["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ 
["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ 
["Slyvia", "Kristal", "Sharilyn", "Calista"]

Notes
Don't change the order of the original array.
Notice in the second example above, "MABELLE" is 
returned as "Mabelle".
*/

//My solution
const capMe = arr => arr.map(item => item[0].toUpperCase() + item.substring(1));

//Other solution using the replace method to change the first letter to capital
const capMe = (arr) => arr.map(x => x.toLowerCase().replace(/^./, c => c.toUpperCase()));