// task 
// find the smallest and largest value in a number that is not an array

function highAndLow(numbers) {
  const numbs = numbers.split(' ')
  .map((str,index) => +str)
  .sort((a,b) => a - b);
  
  return `${numbs[numbs.length - 1]} ${numbs[0]}`;
}
console.log(highAndLow('1 -2847 38 -388 4 2 -6 3 7 5'));