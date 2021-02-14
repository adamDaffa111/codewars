// task
// you task is created function 'isDivideBy' or is_divide_by to check an integer number is divisible by each out to two arguments


// logic program
function isDivideBy(numb,a,b){
 return numb % a == 0 && numb % b == 0
}


// expected
console.log(isDivideBy(36,2,6)) // => true