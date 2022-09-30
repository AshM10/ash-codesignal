function solution(inputArray) {
  for (let i = 1; ; i++) {
    if (inputArray.every((element) => element % i)) return i;
  }
}

/*
function solution(arr) {
  for(var n=1;;n++) if(arr.every(x=>x%n)) return n
}
*/

// pseudocode:
// array of integers, obstacles on straight line
// jumping from point to right in the SAME length
// use a modulus operator and put in the for loop, without the middle operator to break loop. make sure it does not hit 0
// console.log(5 % 4);

// PROBLEM:
// link: https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5/solutions
/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.

Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Non-empty array of positive integers.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 1000,
1 ≤ inputArray[i] ≤ 1000.

[output] integer

The desired length.
*/
