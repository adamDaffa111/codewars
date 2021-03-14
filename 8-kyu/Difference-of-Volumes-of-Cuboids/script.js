function findDifference(a,b) {
  let result_a = a.reduce((acc,curr) => acc *= curr);
  let result_b = b.reduce((acc,curr) => acc *= curr);

  return (result_a > result_b) ? result_a - result_b : result_b - result_a;
}

console.log(findDifference([3,2,5],[1,4,4]));
console.log(findDifference([1,2,5],[1,9,4]));