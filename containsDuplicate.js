const nums = [1, 2, 3, 4]

// Brute Force: Let's start by iterating over the array 2 times and if any element from 1st iteration matches with any element in the 2nd iteration then we can return true

function bruteForceDoubleIteration() {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[i], nums[j])
      // if (nums[i] == nums[j]) {
      //   return true

      // }
    }
  }
}

//console.log(bruteForceDoubleIteration())

// This is wrong, this does not work at all

// let's try another method, sort the numbers before hand, so that similar numbers are adjacent to each other

function sortMethod() {
  const sortNums = nums.sort()

  // for (num of sortNums) { }
  // can't use this need index

  for (let i = 0; i < sortNums.length - 1; i++) {
    if (sortNums[i] == sortNums[i + 1]) {
      return true
    }
  }
  return false
}

console.log(sortMethod())

// This works, but the runtime complexity is O(nlogn) because of the javascript costly sort method

// let's make the runtime complexity of this problem linear, and our friend here is a hashmap

function performantSolution() {
  const set = new Set()

  for (const num of nums) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }

  return false
}

console.log(performantSolution())

// now that we have a hashmap in place the look up operation drastically reduces the complexity to O(1) but the loop will account to O(n) and space complexity as well to O(n) where n is the length of the array because of the hashmap
