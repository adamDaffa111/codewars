
// cara 1
/**
function accum(s) {
  // ubah jadi array 
  const strArr = s.split('');
  // array kosong digunakan untuk menampung string
  let resultArr = [];
  
  for (let i = 0; i < strArr.length; i++) {
   let temp = '';
   for (let j = 0; j <= i; j++) {
     
    temp = j === 0 ? temp += strArr[i].toUpperCase() : temp += strArr[i].toLowerCase();

   }
   resultArr.push(temp);
  }
  return resultArr.join('-');
}
**/

// cara 2 
const accum = (s) => {
  return s
  .toLowerCase()
  .split('')
  .map((h,i) => {
    return h.toUpperCase() + h.repeat(i);
  })
  .join('-');
};

console.log(accum('Abcd'));