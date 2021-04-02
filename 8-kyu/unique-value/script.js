//  kembalikan true hanya jika semua nilai nya berbera 

/*
function unique(str) {
  let values = [];
  for(let letter of str){
    if (values.indexOf(letter) !== -1 ) {
      return false;
    }
    values.push(letter);
  }
 return true;
}
*/

/*
function unique(str) {
  let values = {};
  for(let letter of str){
    if (values[letter]) {
      return false;
    }
    values[letter] = 'exists';
  }
 return true;
 
}

console.log(unique('abcde'));
console.log(unique('abcdeabc'));
*/


function unique(str) {
  for(let i = 0; i < str.length; i++){
   if((str.lastIndexOf(str[i])  !== i)){
      return false;
    }
  }
  return true;
}

 console.log(unique('abcde'));
 console.log(unique('abcdeabc'));
