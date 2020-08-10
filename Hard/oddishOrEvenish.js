/**
Oddish vs. Evenish
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"

oddishOrEvenish(373) ➞ "Oddish"

oddishOrEvenish(4433) ➞ "Evenish"
 */

//My Answer
const oddishOrEvenish = (num) => {
    const stringNum = JSON.stringify(num);
    const total = stringNum.split('').reduce((acc, number) => {
        return acc + Number(number);
    }, 0);
    return (total % 2 === 0 ? 'Evenish': 'Oddish');
}

oddishOrEvenish(45);

//Other Solution all my code on one line
//turn to string map and make numbers use reduce to add all then ternary to see what is returned
const oddishOrEvenish = num => [...String(num)].map(Number).reduce((acc,num) => acc + num) % 2 ? 'Oddish' : 'Evenish';
