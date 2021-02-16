// return the string that you write as many parameters as inputted


const repeatStr = (n,s) => s.repeat(n)
/**
function repeatStr(n,s) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str+=s;
  }
  return str
}**/

console.log(repeatStr(5,"hallo"))