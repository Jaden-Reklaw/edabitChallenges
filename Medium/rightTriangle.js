/*
Is This a Right Angled Triangle?
Given three numbers, x, y and z, determine whether they are the edges of a right angled triangle.

Examples
rightTriangle(3, 4, 5) ➞ true
This is the classic example of a "nice" right angled triangle.

rightTriangle(145, 105, 100) ➞ true
This is a less famous example.

rightTriangle(70, 130, 110) ➞ false
This isn't a right angled triangle.

Notes
Notice the largest side of the triangle might not be the last one passed to the function.
All numbers will be integers (whole numbers).
*/

//My Solution
const rightTriangle = (x, y, z) => {
	const sides = [x,y,z].sort((a, b) => a - b);
  for(let side of sides) {
    if(side < 1) {
      return false;
    }
  }
  return sides[0]**2 + sides[1]**2 === sides[2]**2;
}

//Other solution think using AND logic
function rightTriangle(...args) {
	let [a,b,c]= args.sort((a,b)=>a-b)
	return Math.hypot(a,b)===c && args.every(x=> x>0)
}