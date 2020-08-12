
//My solution
let numInStr = arr => arr.filter(item => item.match(/[0-9]/g));

//Other solution using \d instead of range 0-9 and .test to match regular expression
let numInStr = arr => arr.filter(x=>/\d/.test(x));