/*
How Many Unique Styles?
There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

Examples
uniqueStyles([
  "Dub, Dancehall",
  "Industrial, Heavy Metal",
  "Techno, Dubstep",
  "Synth-pop, Euro-Disco",
  "Industrial, Techno, Minimal"
]) ➞ 9

uniqueStyles([
  "Soul",
  "House, Folk",
  "Trance, Downtempo, Big Beat, House",
  "Deep House",
  "Soul"
]) ➞ 7

Notes
N/A
*/

//My Answer
const uniqueStyles = (albums) => {
    let genres = (albums.map(item => {
      if(item.includes(',')) {
        return item.split(',');
      } else {
              return item;
          }
    }).flat());
  
    return new Set(genres.map(item => item.replace(' ', ''))).size;
  }

  //Other answers
  const uniqueStyles = albums => [...new Set(albums.map(a => a.split(",")).flat())].length;

  const uniqueStyles = albums => new Set(albums.flatMap(x => x.split(','))).size;