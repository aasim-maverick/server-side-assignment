function findIndexes(str, word) {
 let indexes = [];
 let pos = str.indexOf(word);
 while (pos !== -1) {
  indexes.push(pos);
  pos = str.indexOf(word, pos + 1);
 }
 return indexes;
}
