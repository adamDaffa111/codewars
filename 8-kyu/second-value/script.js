function secondValue(arr) {
  let sortedArr = arr.sort((a,b) => a - b);
  if (sortedArr.length < 2) {
    return `${sortedArr[0]}`;
  }
  else if (sortedArr.length == 2) {
    return `${sortedArr[1]} ${sortedArr[sortedArr.length - 2]}`;
  }
  else {
    return `${sortedArr[1]} ${sortedArr[sortedArr.length - 2]}`;
  }
}

console.log(secondValue([1]));
console.log(secondValue([4,2]));
console.log(secondValue([11,44,22]));
console.log(secondValue([3,2,88,3,-11,67,7]));