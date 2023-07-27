function findDuplicates(array) {
  
  //Write your code here
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length; ++j) {
  //     if (i !== j) {
  //       if (array[i] === array[j]) {
  //         array.splice(j, 1)
  //       }
  //     }
  //   }
  // }
  // console.log(array)
  
  // return array;

  let set = new Set(array)
  let myArray = [...set].sort((a,b) => a-b)
  console.log(set)
  console.log(myArray)
}

findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2])
// => [1, 5, 2]

findDuplicates([3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43])
// => [-43]

// module.exports = findDuplicates
