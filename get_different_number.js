function getDifferentNumber(arr) {
  
  const n = arr.length;

  // Create a set to store the unique values from the array
  const set = new Set(arr);

  // Iterate from 0 to n (inclusive)
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      return i; // Return the smallest nonnegative integer not present in the array
    }
  }
  // If all nonnegative integers from 0 to n are present in the array, return n+1
  return n + 1;
}

// Example usage
const arr = [0, 1, 3, 4];
const result = getDifferentNumber(arr);
console.log("Smallest nonnegative integer not present in the array:", result);
