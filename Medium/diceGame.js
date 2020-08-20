/*
Don't Roll Doubles!
John is playing a dice game. The rules are as follows.

Roll two dice.
Add the numbers on the dice together.
Add the total to your overall score.
Repeat this for three rounds.
But if you roll DOUBLES, your score is instantly 
wiped to 0 and your game ends immediately!

Create a function which takes in a matrix as input, 
and return John's score after his game has ended.

Examples
diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27

Notes
Ignore all other arrays in the matrix if a throw happens to be 
doubles and go straight to returning 0.
John only has two dice and will always give you outcomes for 
three rounds.
*/

//My Answer
const diceGame = arr => {
    let addRolls = arr.map(item => item.reduce((acc, i) => acc === i ? 0 : acc + i));
    let total = 0;
    for(let num of addRolls) {
      if(num === 0) {
        return 0;
      }
      total += num;
    }
    return total;
  }

  //Other solutions look into some and every function
  const diceGame = arr => arr.some(v => v[0]===v[1]) ? 0 : arr.flat().reduce((a,v) => a + v, 0);

  const diceGame = arr => arr.every(e => e[0] != e[1]) ? arr.flat().reduce((a,b) => a+b,0) : 0;