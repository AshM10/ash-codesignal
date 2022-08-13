function solution(arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
}

/*
function solution(inputArray) {
    const diff = []
    inputArray.reduce((a,b) => {
        diff.push(Math.abs(a-b))
        return b
    })
    return(Math.max(...diff))
}
*/

// look up the adjacent values
// find the difference
// push differences to the new array
// The Math.abs() function returns the absolute value of a number.
// The reduce() method executes a reducer function for array element.

// PROBLEM:
// link: https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.
*/
