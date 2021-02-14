

// calculate a life path number the date format 'yyyy-mm-dd'
// @param {string} dateOfBirth date of birth in, 'yyyy-mm-dd


function calculatePathNumber(yearOrMonthOrDay) {
  let temp;
  const splitedStr = yearOrMonthOrDay.split('');
  if (yearOrMonthOrDay.length > 1) {
    temp = splitedStr.map(char => parseInt(char,10))
    .reduce((acc,curr) => acc += curr);
  
    if(temp.toString().length > 1){
     return calculatePathNumber(temp.toString())
    }
  return temp
  } else {
    return +yearOrMonthOrDay
  }

}


function lifePathNumber(dateOfBirth){
  const dates = dateOfBirth.split('-');
 
const final = dates.map(date => calculatePathNumber(date)).reduce((acc,curr) => parseInt(acc,10) + curr);
 
 return calculatePathNumber(final.toString())
}

console.log(lifePathNumber('1995-01-12'));