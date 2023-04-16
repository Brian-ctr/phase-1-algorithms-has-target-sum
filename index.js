function hasTargetSum(array, target) {
  const seen = {}; // hash table to keep track of the integers we have seen so far

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]; // the integer that adds up to the target sum with array[i]
    if (seen[complement]) {
      // if we have seen the complement before, we have found a pair of integers whose sum is equal to target
      return true;
    }
    seen[array[i]] = true; // add the current integer to the hash table
  }

  return false; // we have iterated over the array without finding a pair of integers whose sum is equal to target
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;



