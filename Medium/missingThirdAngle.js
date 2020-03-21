/*
You are given 2 out of 3 angles in a triangle, in degrees.

Write a function that classifies the missing angle as either 
"acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).
For example: missingAngle(11, 20) should return "obtuse", since 
the missing angle would be 149 degrees, which makes it obtuse.

Examples
missingAngle(27, 59) ➞ "obtuse"

missingAngle(135, 11) ➞ "acute"

missingAngle(45, 45) ➞ "right"
Notes
The sum of angles of any triangle is always 180 degrees.
*/
let missingAngle = (angle1, angle2) => {
	let missingAngle = 180 - (angle1 + angle2);
	if(missingAngle > 90) {
		return 'obtuse';
	} else if(missingAngle === 90) {
		return 'right';
	} else {
		return 'acute';
	}
}

//Other Solution using ternary operator
let missingAngle = (angle1, angle2) => {
	return angle1 + angle2 < 90 ? 'obtuse': angle1 + angle2 > 90 ? 'acute': 'right';
}