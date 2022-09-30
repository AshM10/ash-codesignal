function solution(inputString) {
  const arr = inputString.split(".");
  if (arr.length == 4) {
    const result = arr.every((number) => {
      if (
        number >= 0 &&
        number <= 255 &&
        number != "" &&
        number != "00" &&
        number != "01"
      )
        return true;
      return false;
    });
    return result;
  }
  return false;
}
/*
This function passed 11/21:
Note to self: Master RegEx

function solution(inputString) {
    const reg = /(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])/
return reg.test(inputString)
}
*/

// IP string consists of 4 elements only, arr.length == 4
// the first value should contain numbers 0 - 255
// Convert string to array by using split and split it on every decimal, hence the '.'
// we use every to make sure 4 elements passes the rules, arr.every(number)
// size of the string. if it is >1 (it's a 2 digit number) and it starts with a 0, then return false.

// PROBLEM:
// link: https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso

/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

For inputString = "172.316.254.1", the output should be
solution(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
solution(inputString) = false.

There is no first number.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of digits, full stops and lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 30.

[output] boolean

true if inputString satisfies the IPv4 address naming rules, false otherwise.
*/
