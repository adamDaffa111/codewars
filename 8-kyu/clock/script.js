// task
// your task is to make 'past' function which return time converted to millisecond


// logic program
function past(clock,minute,second) {
   return (3600 * clock + 60 * minute + second) * 1000
}


// expected
console.log(past(0,1,1),61000)