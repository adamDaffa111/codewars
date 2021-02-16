
// return the smallest item

function findSmallestInt(args) {
 // return args.sort((a,b) => a - b)[0];
 return Math.min(...args);
 
}

console.log(findSmallestInt([19,83,29,875,1,28]));