const nums = [2, 7, 11, 15]
const target = 9

// Brute Force: Start by iterating over the array twice and check for each combination if they add up to target.

function bruteForceDoubleIteration() {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }

  return null
}

// console.log(bruteForceDoubleIteration())

// This works, but this is the most direct and crude method where we are trying to find the sum of all the combinations, the worst case scenario is that the 2 elements are at the end of the array
// runtime complexity is O(n^2) where n is the length of the array and power of 2 is because of the double nested loop
// space complexity O(1) since we did not use any extra memory in the algorithm

// let's try to reduce the runtime complexity, we can do so by reducing the number of loops

function doublePointerIteration() {
  let leftPointer = 0

  for (let rightPointer = 1; rightPointer < nums.length; rightPointer++) {
    if (nums[leftPointer] + nums[rightPointer] == target) {
      return [nums[leftPointer], nums[rightPointer]]
    }
    leftPointer ++
  }

  return null
}

// console.log(doublePointerIteration())

// This works partially, means works for a array where the two elements which results the target are aside each other. For example [3, 2, 4], for target 6 will work since 2, 4 are aside each other, and if the input is [2, 3, 4], for target 6 it will not work since we are always checking the sum of numbers aside each other.

// runtime complexity is O(n) where n is the length of the array
// space complexity is O(1)

// Let's try to use a hashmap, the intution is that everytime we iterate over a array we will try to find the complement of the number by negating from the target, and then try to foind out if the complement is present in the hashmap, and every iteration add the number into the hashmap.

function hashMap() {
  const map = new Map()

  for (const num of nums) {
    const complement = target - num
    if (map.has(complement)) {
      return [map.get(complement), num]
    }
    map.set(num, num)
  }

  return null
}

console.log(hashMap())

// This works and is a optimal solution
// runtime complexity is O(n) for n is the length of the array
// space complexity is O(n)
