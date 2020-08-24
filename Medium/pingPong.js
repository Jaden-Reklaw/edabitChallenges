/*

*/

//My answer
const pingPong = (arr, win) => {
	if(win) {
    return arr.map(item => [item, 'Pong!']).flat();
  } else{
    let answer = arr.map(item => [item, 'Pong!']).flat();
    answer.pop();
    return answer;
  }
}

//Other answer
function pingPong(arr, win) {
	var final = arr.map(e => [e, "Pong!"]).flat()
	return win ? final : final.slice(0,final.length-1);
}