
var min = function(list){
  return list.sort((a,b) => a - b)[0]
}
var max = function(list){
 return list.sort((a,b) => a - b)[list.length - 1]
}
console.log(min([-29,85,4,7,9,65,0,19]))
console.log(max([-29,85,4,7,9,65,0,19]))