/*
Distance Between Two Points
In this challenge, you have to find the distance 
between two points placed on a Cartesian plane. 
Knowing the coordinates of both the points, you 
have to apply the Pythagorean theorem to find the 
distance between them.

Two points on a Cartesian plane

Given two object literals a and b being the two 
points coordinates (x and y), implement a function 
that returns the distance between the points, 
rounded to the nearest thousandth.

Examples
getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

Notes
Take a look at the Resources tab if you need a 
refresher on the geometry related to this challenge.
The "distance" is the shortest distance between 
the two points, or the straight line generated 
from a to b.

Pythagorean Theorem
√(X2 - X1)^2 + (Y2 - Y1)^2
*/

//My Answer
const getDistance = (a, b) => Math.round(1000 * Math.sqrt(((b.x - a.x)**2) + (b.y - a.y)**2)) / 1000;

//Other solution using Math.hypot
const getDistance = (a, b) => +Math.hypot(b.x-a.x, b.y-a.y).toFixed(3);