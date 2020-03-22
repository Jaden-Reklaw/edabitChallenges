/*
Create a function that takes in a year and returns the correct century.

Examples
century(1756) ➞ "18th century"

century(1555) ➞ "16th century"

century(1000) ➞ "10th century"

century(1001) ➞ "11th century"

century(2005) ➞ "21st century"
Notes
All years will be between 1000 and 2010.
The 11th century is between 1001 and 1100.
The 18th century is between 1701-1800.

*/

function century(year) {
	if(year > 900 && year <= 1000) {
		return '10th century';
	}	else if(year > 1000 && year <= 1100) {
		return '11th century';
	} else if (year > 1100 && year <= 1200) {
		return '12th century';
	} else if (year > 1200 && year <= 1300) {
		return '13th century';
	} else if (year > 1300 && year <= 1400) {
		return '14th century';
	} else if (year > 1400 && year <= 1500) {
		return '15th century';
	} else if (year > 1500 && year <= 1600) {
		return '16th century';
	} else if (year > 1600 && year <= 1700) {
		return '17th century';
	} else if (year > 1700 && year <= 1800) {
		return '18th century';
	} else if (year > 1800 && year <= 1900) {
		return '19th century';
	} else if (year > 1900 && year <= 2000) {
		return '20th century';
	} else if (year > 2000 && year <= 2100) {
		return '21st century';
	}
}

//Other way uses Math.ceil
//Ceil rounds the number up if it has a decimal
//so 2001 / 100 = 20.01 with Math.Ceil it goes up to 21
//so 2000 / 100 = 20.00 with Math.Ceil it goes up to 20
function century(year) {
	const century = Math.ceil(year / 100);
	console.log('century is:',century);
  	return century !== 21 ? `${century}th century` : `${century}st century`;
}





