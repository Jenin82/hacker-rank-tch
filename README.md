# Here is my HackerRank Solutions

>The repository contains the solutions to various HackerRank problems. Each solution includes a reference to the problem statement and is well-documented, to explain the logic and approach.




## Solution Approach

>Following are the problems I solved in HackerRank to reach a rank under 10k from 20k.

---
## 1. HackerRank in a String!
  - [Problem](https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/hackerrank-in-a-string.js)
  - Explanation:
  > In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. The program then rounds each grade according to a specific rule and prints the rounded grades.
```javaScript
    function hackerrankInString(s) {
    let test = "hackerrank";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == test[count]) {
            count++;
        }
    }
    return test.length === count ? "YES" : "NO";
}
```
The function hackerrankInString is designed to determine if the string "hackerrank" can be spelled out by picking characters sequentially (though not necessarily consecutively) from the given string s. If it can, the function returns "YES"; otherwise, it returns "NO".

Here's a breakdown of the function:
```javaScript
let test = "hackerrank";
let count = 0;
```
- "test" is the target string that we want to find within s.
- "count" will be used to keep track of the current position we're at within the test string.
```javaScript
for (let i = 0; i < s.length; i++) {
    if (s[i] == test[count]) {
        count++;
    }
}
```
- For each character in the string s, if that character matches the current character in test (indicated by the count index), we increment the count.
- By doing this, we're trying to sequentially match each character from the test string in the order they appear in s.
```javaScript
return test.length === count ? "YES" : "NO";
```
- After looping through s, if we have matched every character in test (meaning count is equal to the length of test), then we return "YES".
- If not all characters were matched (i.e., count is less than the length of test), then we return "NO".
****