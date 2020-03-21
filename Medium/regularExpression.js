/*
Good luck regular expressions are ridiculous

Resources:
https://regex101.com/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Groups and ranges indicate groups and ranges of expression characters. 
Character Sets match any characters inside of brackets [ ]. 
You can specify a range of characters by using a hyphen.

/[abcd]/ === /[a-d]/
If the hyphen appears as the first or last character then it is considered a literal hyphen.

"non-profit".match(/[abc-]/g)  // "-"
"non-profit".match(/[-abc]/g)  // "-"
You can also use character classes in a character set. So instead of this:

/[A-Za-z0-9_-]/
You can do this:

/[\w]/
Create the regex to match "x" followed by two digits or letters from A to F. Case sensitive.

Examples
"Exception 0xAF".match(REGEXP) ➞ "xAF"

"Exception 0xD3".match(REGEXP) ➞ "xD3"

"Exception 0xd3".match(REGEXP) ➞ null

"Exception 0xZZ".match(REGEXP) ➞ null
*/
const REGEXP = /x[0-9A-F]+/g;

//Other answer
const REGEXP = /x[A-F\d]{2}/g

