/*
In N Days...
If today was Monday, in two days, it would be Wednesday.

Create a function that takes in an array of days as input and the number of days to increment by. 
Return an array of days after n number of days has passed.

Examples
afterNDays(["Thursday", "Monday"], 4) ➞ ["Monday", "Friday"]

afterNDays(["Sunday", "Sunday", "Sunday"], 1) ➞ ["Monday", "Monday", "Monday"]

afterNDays(["Monday", "Tuesday", "Friday"], 1) ➞ ["Tuesday", "Wednesday", "Saturday"]

Notes
Return as an array.
All test cases will have the first letter of each day capitalized.
n number of days may be greater than 7.
*/

//My answer
const afterNDays = (days, n) => {
	const daysOfWeek = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  };

  const numsToDays = {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday'
  };
  
  //Loop over array and get numbers
  const numArray = days.map(item => (daysOfWeek[item] + n) % 7);

  return numArray.map(item => numsToDays[item]);
}

//Other solution
const afterNDays = (days, n) => {
	let lst = ["Sunday", "Monday", "Tuesday", "Wednesday",
						 "Thursday", "Friday", "Saturday"];
	return days.map(item => lst[(lst.indexOf(item) + n) % 7]);
}