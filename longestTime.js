/*
A Long Long Time
Create a function that takes three values:

h hours
m minutes
s seconds
Return the value that's the longest duration.

Examples
longestTime(1, 59, 3598) ➞ 1

longestTime(2, 300, 15000) ➞ 300

longestTime(15, 955, 59400) ➞ 59400
Notes
No two durations will be the same.
*/

//My answer
const longestTime = (hr, min, sec) => {
    const secHours = hr*60*60;
    const secMins = min*60;
    if(secHours > secMins && secHours > sec) {
        return hr;
    } else if(secMins > secHours && secMins > sec) {
        return min;
    } else {
        return sec;
    }
}

//Other answer
function longestTime(h, m, s) {
	return h < m/60? m < s/60? s : m : h;
}