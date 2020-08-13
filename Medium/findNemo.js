/*
Finding Nemo
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
Notes
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
If there are multiple Nemo's in the sentence, only return for the first one.
*/

//My answer
const findNemo = (sentence) => {
    let arr = sentence.split(" ");
      for(let i=0; i < arr.length; i++) {
      if(arr[i] === 'Nemo') {
        return `I found Nemo at ${i + 1}!`
      }
    }
    return `I can't find Nemo :(`;
}

//Other solution using indexOf function for arrays
let findNemo = a => {
    let b = a.split(" ").indexOf("Nemo") + 1;
    return b ? `I found Nemo at ${b}!` : "I can't find Nemo :(";
}

//Other solution using findIndex function for arrays
const findNemo = sentence => {
	const index = sentence.split(' ').findIndex(e => e === 'Nemo');
    return index >= 0 ? `I found Nemo at ${index+1}!` : "I can't find Nemo :(";
}