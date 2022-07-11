/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets.
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.
  // can shift OR swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
// function insertionSort(nums) {
//   if(nums.length == 0) {
//     return null
//   }

//   for(i=1;i<nums.length;i++) {
//     let temp = 0;
//     let j = 0;
//     counter = 0;
//     while(nums[j] != null) {
      
//       if(nums[i] < nums[j]) {
//         temp = nums[i]
//         nums[i] = nums[j]
//         nums[j] = temp;
//         counter++
//       }
//       console.log(counter)
//       j++
//     }
//   }
//   return nums

// }

// console.log(insertionSort(numsRandomOrder))
// console.log(numsReversed)
// console.log(insertionSort(numsReversed))

/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function merge(left, right) {
  console.log(left)
  console.log(right)
  // let newList = [];
  // if(left.length == 0 && right.length == 0) return newList;

  // for(i=0;i<left.length;i++) {
  //   newList.push(left[i])
  // }
  // for(j=0;j<right.length;j++) {
  //   newList.push(right[j])
  // }
  
}

// mergeSort

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
  if(nums.length < 2) {
    return nums;
  }  
  
  let leftSide = nums.slice(0, nums.length/2);
  let rightSide = nums.slice(nums.length/2, nums.length);

  console.log(leftSide, rightSide);

  // if(leftSide.length > 1) mergeSort(leftSide);
  
  // if(rightSide.length > 1) mergeSort(rightSide);
  let sortedLeft = mergeSort(leftSide);
  let sortedRight = mergeSort(rightSide);
  return merge(sortedRight, sortedLeft);

}

// console.log(merge(sortedA1, sortedB1))
// console.log(merge(sortedA2, sortedB2))
// console.log(merge(sortedA3, sortedB3))
// console.log(merge(sortedA4, sortedB4))

// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
mergeSort(numsRandomOrder);