function checkPalindrome(str) {
  let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();
  return tempStr;
}

console.log(checkPalindrome('was it a car or a cat i saw'));
console.log(checkPalindrome('red -rum-, sir,-is-murder'));
console.log(checkPalindrome('i got up early this morning'));
