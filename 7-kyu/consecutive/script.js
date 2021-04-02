function consecutive(arr,a,b) {
  let numb1 = arr.indexOf(a);
  let numb2 = arr.indexOf(b);
  return Math.abs(numb1 - numb2) == 1 ? true : false;
}


console.log(consecutive([1,3,5,7],3,7),false);
console.log(consecutive([1,3,5,7],3,1),true);
console.log(consecutive([1,6,8,-3,4,-78,0],-3,4),true);