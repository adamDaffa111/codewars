function arraySum(arr) {
  let tempArr = arr.sort((a,b) => a - b);
  let equalNumber = tempArr.pop()
  let result = 0;
  tempArr.map(numb => result += numb);
  return equalNumber == result;
  
}
console.log(arraySum([1,2,4,6,13]));
console.log(arraySum([1,2,4,34,22]));