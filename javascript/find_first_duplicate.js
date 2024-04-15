function findFirstDuplicate(arr) {
  let seen = {}; // hash set

  for (let num of arr) {
    if (seen[num]) {
      return num; // first duplicate found
    } else {
      seen[num] = true; // mark num as seen
    }
  }

  return -1; // no duplicate found
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
