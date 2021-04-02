function longestWord(str) {
  const words = str.split(" ");
  let longestWord = '';

  for (let word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(longestWord("i love her ayu rizky & fitri hayati"));