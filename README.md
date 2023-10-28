# Here is my HackerRank Solutions

>The repository contains the solutions to various HackerRank problems. Each solution includes a reference to the problem statement and is well-documented, to explain the logic and approach.




## Solution Approach

>Following are the problems I solved in HackerRank to reach a rank under 10k from 20k.

---
## 1. HackerRank in a String!
  - [Problem](https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/hackerrank-in-a-string.js)
  - Explanation:
  > The function `hackerrankInString` is designed to determine if the string "hackerrank" can be spelled out by picking characters sequentially (though not necessarily consecutively) from the given string `s`. If it can, the function returns "YES"; otherwise, it returns "NO".
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
- `test` is the target string that we want to find within `s`.
- `count` will be used to keep track of the current position we're at within the `test` string.
```javaScript
for (let i = 0; i < s.length; i++) {
    if (s[i] == test[count]) {
        count++;
    }
}
```
- For each character in the string `s`, if that character matches the current character in `test` (indicated by the count index), we increment the count.
- By doing this, we're trying to sequentially match each character from the `test` string in the order they appear in `s`.
```javaScript
return test.length === count ? "YES" : "NO";
```
- After looping through `s`, if we have matched every character in `test` (meaning count is equal to the length of `test`), then we return "YES".
- If not all characters were matched (i.e., count is less than the length of `test`), then we return "NO".
****

## 2. Palindrome Index
  - [Problem](https://www.hackerrank.com/challenges/palindrome-index/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/palindrome-index.js)
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

## 3. Anagram Challenge
  - [Problem](https://www.hackerrank.com/challenges/anagram/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/anagram.js)
  - Explanation:
  > The `anagram` function determines how many characters one would need to change in the first half of the string `s` to make it an anagram of the second half. If the string length is odd, it cannot be split into two equal halves, and the function returns `-1`.

```javascript
function anagram(s) {
    if (s.length % 2 !== 0) {
        return -1;
    }
    let secondHalf = s.slice(s.length / 2).split("");
    for (const char of s.slice(0, s.length / 2)) {
        if (secondHalf.includes(char)) {
            secondHalf.splice(secondHalf.indexOf(char), 1);
        }
    }
    return secondHalf.length;
}
```
Here's a breakdown of the function:
```javascript
if (s.length % 2 !== 0) {
    return -1;
}
```
- The function first checks if the string's length is odd. If it is, you can't split it into two equal halves to compare, and the function returns `-1`.

```javascript
let secondHalf = s.slice(s.length / 2).split("");
for (const char of s.slice(0, s.length / 2)) {
    ...
}
```
- The function divides `s` into two equal halves. The second half is split into individual characters and stored in the array `secondHalf`.
- It then iterates over each character in the first half of `s`.

```javascript
if (secondHalf.includes(char)) {
    secondHalf.splice(secondHalf.indexOf(char), 1);
}
```
- For each character in the first half of `s`, the function checks if that character exists in `secondHalf`.
- If it does, that character is removed from `secondHalf` using the `splice` method. This implies that the character from the first half matches a character in the second half, so no change is required for that specific character.

```javascript
return secondHalf.length;
```
- After the loop completes, the length of the `secondHalf` array represents the number of characters that did not find a match in the first half, which is equal to the number of changes required to make the first half an anagram of the second half.

****
Sure, let's format the explanation in the style suitable for a GitHub readme:

---

## 4. Making Anagrams
  - [Problem](https://www.hackerrank.com/challenges/making-anagrams/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/making-anagrams.js)
  - Explanation:
  > The `makingAnagrams` function calculates the minimum number of character deletions required to make two strings, `s1` and `s2`, anagrams of each other.

```javascript
function makingAnagrams(s1, s2) {
    let s1List = [...s1];
    let s2List = [...s2];
    let commonItems = 0;

    for (let item of s1List) {
        let index = s2List.indexOf(item);
        if (index !== -1) {
            s2List.splice(index, 1);
            commonItems++;
        }
    }
    return (s2.length + s1.length) - (commonItems * 2);
}
```
Here's a breakdown of the function:
```javascript
let s1List = [...s1];
let s2List = [...s2];
let commonItems = 0;
```
- `s1List` and `s2List` are arrays created from the strings `s1` and `s2` respectively, allowing for easy manipulation and traversal of individual characters.
- `commonItems` is a counter initialized to zero, which will be used to count the number of characters that the two strings have in common.

```javascript
for (let item of s1List) {
    let index = s2List.indexOf(item);
    if (index !== -1) {
        s2List.splice(index, 1);
        commonItems++;
    }
}
```
- The function iterates over each character in `s1List`.
- For each character, it checks if it exists in `s2List`.
- If it does, that character is removed from `s2List` using the `splice` method and the `commonItems` counter is incremented.

```javascript
return (s2.length + s1.length) - (commonItems * 2);
```
- The total number of deletions required to make the two strings anagrams is equal to the sum of their lengths minus twice the number of common characters (since each common character exists in both strings).
- This result gives us the number of characters that are not in common between the two strings and hence need to be deleted.
****

## 5. Game of Thrones - Palindrome Check
  - [Problem](https://www.hackerrank.com/challenges/game-of-thrones/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/game-of-thrones.js)
  - Explanation:
  > The function `gameOfThrones` checks if the given string `s` can be rearranged to form a palindrome. It does this by ensuring that there's at most one character with an odd frequency. If it's possible to form a palindrome, the function returns "YES", otherwise it returns "NO".

```javascript
function gameOfThrones(s) {
    let oddcount = 0;
    while (s.length > 0) {
        const char = s[0];
        const count = s.split(char).length - 1;
        if (count % 2 !== 0) {
            oddcount++;
        }
        s = s.replace(new RegExp(char, 'g'), '');
        if (oddcount > 1) {
            return "NO";
        }
    }
    return "YES";
}
```
Here's a breakdown of the function:
```javascript
let oddcount = 0;
```
- `oddcount` is a counter that will keep track of the number of characters in the string `s` that have an odd frequency.

```javascript
while (s.length > 0) {
    ...
}
```
- The function uses a while loop to process each unique character in the string `s`.

```javascript
const char = s[0];
const count = s.split(char).length - 1;
```
- It takes the first character of the current string `s` and determines how many times that character appears in the string.

```javascript
if (count % 2 !== 0) {
    oddcount++;
}
```
- If the character frequency is odd, it increments the `oddcount`.

```javascript
s = s.replace(new RegExp(char, 'g'), '');
```
- After processing a character, all its occurrences are removed from the string `s` so that the loop can process the next character.

```javascript
if (oddcount > 1) {
    return "NO";
}
```
- For a string to be rearranged into a palindrome, there should be at most one character with an odd frequency. If there's more than one, it's impossible to rearrange the string as a palindrome, and the function returns "NO".

```javascript
return "YES";
```
- If the loop completes without finding more than one character with an odd frequency, it means the string `s` can be rearranged into a palindrome, and the function returns "YES".
****
