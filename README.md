# Here is my HackerRank Solutions

>The repository contains the solutions to various HackerRank problems. Each solution includes a reference to the problem statement and is well-documented, to explain the logic and approach.




## Solution Approach

>Following are the problems I solved in HackerRank to reach a rank under 10k from 20k.

---
## 1. HackerRank in a String!
  - [Problem](https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/hackerrank-in-a-string.js)
  - Explanation:
  > The function hackerrankInString is designed to determine if the string "hackerrank" can be spelled out by picking characters sequentially (though not necessarily consecutively) from the given string s. If it can, the function returns "YES"; otherwise, it returns "NO".
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

Certainly, let's format the explanation suitable for a GitHub readme:

---

## 2. Palindrome Index
  - Explanation:
  > The function `palindromeIndex` determines if there is an index in a given string `s` where, if its character is removed, the string would become a palindrome. If the string is already a palindrome, it returns `-1`. If such a character exists, its index is returned. 

```javascript
function palindromeIndex(s) {
    const r = s.split("").reverse().join("");
    if (s === r) {
        return -1;
    }
    for (let i = 0; i < s.length; ++i) {
        if (
            s.substring(0, i) + s.substring(i + 1) === r.substring(0, s.length - 1 - i) + r.substring(s.length - i)
        ) {
            return i;
        }
    }
}
```
Here's a breakdown of the function:
```javascript
const r = s.split("").reverse().join("");
if (s === r) {
    return -1;
}
```
- Here, the string `s` is split into individual characters, reversed, and then joined back. This reversed string is stored in `r`.
- If `s` is equal to its reverse `r`, then it's already a palindrome. Thus, the function returns `-1`.

```javascript
s.substring(0, i) + s.substring(i + 1) === r.substring(0, s.length - 1 - i) + r.substring(s.length - i)
```
- The function iterates through each character in `s`.
- For each character at position `i`, the function checks if removing that character would result in a palindrome. 
- It does so by comparing the string `s` (minus the character at index `i`) to the reversed string `r` (minus the character at the corresponding position).
- If a match is found, meaning removal of the character at index `i` of `s` creates a palindrome, the function returns `i`.

****