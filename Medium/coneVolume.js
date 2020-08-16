/*
Volume of a Cone
Create a function that takes the height and radius 
of a cone as arguments and returns the volume of 
the cone rounded to the nearest hundredth.

Volume of a Cone Image

Examples
coneVolume(3, 2) ➞ 12.57

coneVolume(15, 6) ➞ 565.49

coneVolume(18, 0) ➞ 0
Notes
See the resources tab for the formula.
Return approximate answer by rounding the answer 
to the nearest hundredth.
Use JavaScript's PI property, don't fall for 3.14 ;-)
If the cone has no volume, return 0.
*/

//Volume of a cone Pi * (r^2) * (h/3)
//My answer
const coneVolume = (h, r) => Math.round(100*(3.14159 * (r*r) * (h/3)))/100;

//Other answer using to fix to round
let coneVolume=(h,r) => Number(((Math.PI * r * r * h)/3).toFixed(2));