function capitalize(text){
  let word = text.split(' ').map(word => {
    let firstlatter = word.slice(0,1);
    let rest = word.slice(1);
    firstlatter = firstlatter.toUpperCase();
    return `${firstlatter}${rest}`;
  });
  return word.join(' ');
}

console.log(capitalize('saya berangkat ke sekolah naek motor revo'));