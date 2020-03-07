/* 
Questions:
 1. What is bad about this implementation?
 2. How can it be improved?
 3. What is the algorithmic complexity?
*/

function remove_spaces(str) {
  // Remove all spaces in string
  console.log('str: ' + str)
  while (true) {
    var pos = str.indexOf(' ');
    if (pos == -1) break;
    str = str.slice(0, pos) + str.slice(pos + 1);
    console.log('str: ' + str)
  }
  return str;
}

// my approach

function remove_spacees_regex(str) {
  return str.replace(/\s+/g, '')
}

console.log('remove_spaces(): ' + remove_spaces(' the cat and the hat'))
console.log('remove_spaces_regex(): ' + remove_spacees_regex(' the cat and the hat'))