function solution(name) {
  return /^[a-z_]\w*$/i.test(name)
}


/*
Understanding RegEx is key. 

Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string name

Guaranteed constraints:
1 ≤ name.length ≤ 10.

[output] boolean

true if name is a correct variable name, false otherwise.

NOTE:

The ^ in the beginning of the RegEx means the name should start with letters or underscore only.
The i at the end of the RegEx means it doesn't matter if the letters are upper or lower case.
The *$ signifies the end of the RegEx
*/
