/*
Temperature Converter
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
For the formulae to convert back and forth, check the Resources tab.
*/

const convert = (deg) => {
    let num = Number(deg.match(/^[+-]?(\d+)/g).join(''));

    if(deg.includes('C')) {
        return String(Math.round(num * (9/5) + 32)) + '°F';
    } else if(deg.includes('F')) {
        return String(Math.round((num - 32) * 5/9)) + '°C';
    } else {
			return 'Error';
		}
}

//Other solution
const convert = deg => {
	if (!deg.includes('°')) return 'Error';
	
	let value = Number(deg.split('°')[0]);
	let inFahrenheit = Math.round(value * 1.8 + 32);
	let inCelsius = Math.round((value - 32) / 1.8);
	
	return deg.includes('F') ? `${inCelsius}°C` : `${inFahrenheit}°F`;
}