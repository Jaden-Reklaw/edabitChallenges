/*
Arrow Pattern
Create a function that creates a pattern as a 2D 
array for a given number.

Examples
 >
 >>
 >>>
 >>
 >

arrow(3) ➞ [">", ">>", ">>>", ">>", ">"]

 >
 >>
 >>>
 >>>>
 >>>>
 >>>
 >>
 >

arrow(4) ➞ [">", ">>", ">>>", ">>>>", ">>>>", ">>>", ">>", ">"]
Notes
Function argument will always be a number greater than 0.
*/

//My answer
const arrow = n =>  {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  
    const arr1 = range(1, n, 1);
    const arr2 = arr1.map(item => item).reverse();
    const answer = [];
    
  
    if(n % 2 === 0) {
      answer.push(arr1, arr2);
    } else {
      arr2.shift();
      answer.push(arr1, arr2);
    }
  
    return answer.flat().map(item => '>'.repeat(item)); 
}

//Other answer
const arrow = (n) => {
	let top_half = []
	let bottom_half = []
	for (var i = 1;i<=n;i++)
		top_half.push('>'.repeat(i))
	for (var i = n%2;i<=n-1;i++)
		top_half.push('>'.repeat(n-i))
	return top_half.concat(bottom_half)
}

const arrow = n => [r=Array.from({length:n}, (_,i) =>
    '>'.repeat(i+1)), r.slice().reverse().slice((n&1))].flat();