/*
C*ns*r*d Str*ngs
Someone has attempted to censor my strings by replacing every 
vowel with a *, l*k* th*s. Luckily, I've been able to find 
the vowels that were removed.

Given a censored string and a string of the censored vowels, 
return the original uncensored string.

Example
uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

uncensor("abcd", "") ➞ "abcd"

uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

Notes
The vowels are given in the correct order.
The number of vowels will match the number of * characters in 
the censored string.
*/

//My Answer
const uncensor = (str, vowels) => {
    let sentence = str.split('');
  
    for(let i=0, j=0; i < sentence.length; i++){
      if(sentence[i] === '*') {
        sentence[i] = vowels[j];
        j++;
      }
    }
    return sentence.join('');;
}

//Other Solutions
const uncensor = (str, vowels) => {
    const arr = vowels.split('');
    return str.replace(/\*/g, () => arr.shift());
};

function uncensor(str, vowels) {
	for (let i=0;i<vowels.length; i++){
		str = str.replace('*', vowels[i])
	}
 return str
}