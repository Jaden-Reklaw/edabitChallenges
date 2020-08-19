/*

*/

//My answer note the instructions said you don't have to sort which is what i was doing first
const canConcatenate = (arr, target) => {
    let flattenArray = arr.flat(Infinity);
  
    if(flattenArray.length !== target.length) {
      return false;
    }
  
    for(let i=0; i < flattenArray.length; i++) {
      if(!target.includes(flattenArray[i])){
        return false;
      } else {
        return true;
      }
    }
  }

  //Other solution and what I was originally going for
  const canConcatenate = (arr, target) => JSON.stringify(arr.flat(Infinity).sort()) === JSON.stringify(target.sort());

  
