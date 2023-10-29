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

## 6. Two Strings - Common Substring Check
  - [Problem](https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/two-strings.js)
  - Explanation:
  > The `twoStrings` function determines if two strings, `s1` and `s2`, share a common substring. A substring can be as short as one character. If they have at least one common character, the function returns "YES", otherwise it returns "NO".

```javascript
function twoStrings(s1, s2) {
    for (let item of s1) {
        if (s2.includes(item)) {
            return "YES";
        }
    }
    return "NO";
}
```
Here's a breakdown of the function:
```javascript
for (let item of s1) {
    ...
}
```
- The function uses a for-of loop to traverse each character in the string `s1`.

```javascript
if (s2.includes(item)) {
    return "YES";
}
```
- For each character from `s1`, the function checks if that character exists in the string `s2` using the `includes` method.
- If it does, that means `s1` and `s2` share a common substring (the character itself) and the function returns "YES".

```javascript
return "NO";
```
- If the loop completes without finding a common character, that means `s1` and `s2` do not have a common substring and the function returns "NO".
****

## 7. String Construction
  - [Problem](https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/string-construction.js)
  - Explanation:
  > The `stringConstruction` function determines the minimum cost to construct a string `s`. According to the problem's requirements, appending a character from the original string to a new string costs $1, but appending a character you've already appended before is free. The function returns the total cost.

```javascript
function stringConstruction(s) {
    let res = "";
    let dollar = 0;
    for (let i of s) {
        if (!res.includes(i)) {
            dollar++;
        }
        res += i;
    }
    return dollar;
}
```
Here's a breakdown of the function:
```javascript
let res = "";
let dollar = 0;
```
- `res` is an empty string that will be used to construct the new string from characters of `s`.
- `dollar` is a counter initialized to zero, which will be used to keep track of the total cost.

```javascript
for (let i of s) {
    ...
}
```
- The function uses a for-of loop to traverse each character in the string `s`.

```javascript
if (!res.includes(i)) {
    dollar++;
}
```
- For each character from `s`, the function checks if that character already exists in the `res` string using the `includes` method.
- If the character doesn't exist in `res`, that means it's the first time we're adding this character, so we need to pay $1 and the `dollar` counter is incremented.

```javascript
res += i;
```
- Regardless of whether we paid for the character or not, we append it to the `res` string.

```javascript
return dollar;
```
- After processing all characters in `s`, the function returns the total cost, which is stored in the `dollar` variable.
****

## 8. Sherlock and the Valid String
  - [Problem](https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/sherlock-and-valid-string.js)
  - Explanation:
  > The `isValid` function checks if a string `s` can be considered "valid". A string is valid if all characters of the string appear the same number of times or if it can become valid by removing just 1 character at one position. If the string is valid, the function returns "YES", otherwise it returns "NO".

```javascript
function isValid(s) {
    let data = {};
    for (let char of s) {
        data[char] = (data[char] || 0) + 1;
    }

    let counts = Object.values(data);
    let uniqueCounts = [...new Set(counts)];

    if (uniqueCounts.length === 1) {
        return "YES";
    } else if (uniqueCounts.length === 2) {
        let flag = true;
        for (let count of counts) {
            if (count !== counts[0] && flag) {
                flag = false;
            } else if (count !== counts[0]) {
                return "NO";
            }
        }
        return "YES";
    } else {
        return "NO";
    }
}
```
Here's a breakdown of the function:
```javascript
let data = {};
for (let char of s) {
    data[char] = (data[char] || 0) + 1;
}
```
- The function uses a `data` object to record the frequency of each character in the string `s`.

```javascript
let counts = Object.values(data);
let uniqueCounts = [...new Set(counts)];
```
- The function determines the unique frequencies of characters by first gathering all frequency values and then removes duplicates using a Set.

```javascript
if (uniqueCounts.length === 1) {
    return "YES";
}
```
- If there's only one unique frequency, all characters appear the same number of times, making the string valid.

```javascript
else if (uniqueCounts.length === 2) {
    ...
    return "YES";
}
```
- If there are two unique frequencies, the string can still potentially be valid. However, there's only one chance (indicated by the `flag` variable) to encounter a frequency that doesn't match the majority. If another mismatching frequency is found, the string is invalid.

```javascript
else {
    return "NO";
}
```
- If there are more than two unique frequencies, it's impossible for the string to be valid as per the given constraints, so the function returns "NO".
****

## 9. Find Median
  - [Problem](https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/find-the-median.js)
  - Explanation:
  > The `findMedian` function takes an array `arr` and returns its median value. The median of a list of numbers is the number that appears right in the middle of the list when it's sorted in ascending order. For an array of odd length, it's the middle number. The given problem only has arrays of odd length.

```javascript
function findMedian(arr) {
    arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}
```
Here's a breakdown of the function:
```javascript
arr.sort((a, b) => a - b);
```
- The function first sorts the array `arr` in ascending order. It uses JavaScript's `sort` method with a comparator function `(a, b) => a - b` to ensure numerical sorting.

```javascript
return arr[Math.floor(arr.length / 2)];
```
- After sorting, the median value can be found at the middle index of the array. 
- For an array with an odd length, `Math.floor(arr.length / 2)` gives the exact middle index. 
****

## 10. Closest Numbers
  - [Problem](https://www.hackerrank.com/challenges/closest-numbers/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/closest-numbers.js)
  - Explanation:
  > The `closestNumbers` function takes an array `arr` and returns a list of all pairs of numbers from the array that have the smallest absolute difference between them. These pairs are returned as a flattened array in ascending order.

```javascript
function closestNumbers(arr) {
    let minimum = 0;
    arr.sort((a, b) => a - b);
    let sortedList = [];
    for (let index = 0; index < arr.length - 1; index++) {
        sortedList.push([arr[index], arr[index + 1]]);
        if (index === 0 || arr[index + 1] - arr[index] < minimum) {
            minimum = arr[index + 1] - arr[index];
        }
    }
    return sortedList
        .filter(pair => pair[1] - pair[0] === minimum)
        .flat();
}
```
Here's a breakdown of the function:
```javascript
arr.sort((a, b) => a - b);
```
- The array `arr` is sorted in ascending order to make it easier to find pairs with the smallest difference.

```javascript
let sortedList = [];
for (let index = 0; index < arr.length - 1; index++) {
    sortedList.push([arr[index], arr[index + 1]]);
    if (index === 0 || arr[index + 1] - arr[index] < minimum) {
        minimum = arr[index + 1] - arr[index];
    }
}
```
- A list called `sortedList` is populated with consecutive number pairs from the sorted array.
- During this process, the function also finds the smallest difference between consecutive numbers and stores it in the `minimum` variable.

```javascript
return sortedList
    .filter(pair => pair[1] - pair[0] === minimum)
    .flat();
```
- The function filters out pairs from `sortedList` that have a difference other than the minimum difference found.
- After filtering, the array of pairs is flattened to produce the final output.
****

## 11. Missing Numbers
  - [Problem](https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/missing-numbers.js)
  - Explanation:
  > The `missingNumbers` function is designed to determine the numbers that are missing from array `arr` when compared with array `brr`.

```javascript
function missingNumbers(arr, brr) {
    let freqArr = {};
    let freqBrr = {};
    let missing = [];
    for (let num of arr) {
        freqArr[num] = (freqArr[num] || 0) + 1;
    }
    for (let num of brr) {
        freqBrr[num] = (freqBrr[num] || 0) + 1;
    }
    for (let num in freqBrr) {
        if (!freqArr[num] || freqArr[num] < freqBrr[num]) {
            missing.push(parseInt(num));
        }
    }
    return missing;
}
```
Here's a breakdown of the function:
```javascript
let freqArr = {};
let freqBrr = {};
```
- Two frequency maps are initialized: `freqArr` for the `arr` array and `freqBrr` for the `brr` array. These maps will keep track of how many times each number appears in their respective arrays.

```javascript
for (let num of arr) {
    freqArr[num] = (freqArr[num] || 0) + 1;
}
for (let num of brr) {
    freqBrr[num] = (freqBrr[num] || 0) + 1;
}
```
- Populate the frequency maps by iterating over the arrays.

```javascript
for (let num in freqBrr) {
    if (!freqArr[num] || freqArr[num] < freqBrr[num]) {
        missing.push(parseInt(num));
    }
}
```
- Iterate over the keys (numbers) in `freqBrr` (since `brr` is the reference array).
- For each number, if it doesn't exist in `freqArr` or its frequency in `freqArr` is less than its frequency in `freqBrr`, then it's considered a missing number. It's added to the `missing` array after being parsed to an integer (since object keys are string-typed).

```javascript
return missing;
```
- The function returns the `missing` array, which contains the numbers that are absent or less frequent in `arr` as compared to `brr`.
****

## 12. Ice Cream Parlor
  - [Problem](https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/icecream-parlor.js)
  - Explanation:
  > The `icecreamParlor` function seeks to determine the two distinct ice cream flavors from the `arr` that sum up to a given amount `m`. The function assumes there is always a unique solution and returns the 1-indexed positions of these two flavors. The solution uses a hash-based approach to keep track of previously seen ice cream flavors and their respective indices.

```javascript
function icecreamParlor(m, arr) {
    const iceCream = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = m - arr[i];
        if (iceCream[complement]) {
            return [iceCream[complement], i + 1];
        }
        iceCream[arr[i]] = i + 1;
    }
}
```
Here's a breakdown of the function:
```javascript
const iceCream = {};
```
- The `iceCream` object is used as a map to keep track of ice cream flavors we've seen so far and their 1-indexed positions in `arr`.

```javascript
for (let i = 0; i < arr.length; i++) {
```
- Loop through each ice cream flavor in the array.

```javascript
const complement = m - arr[i];
```
- For each flavor, calculate its complement by subtracting the flavor's price from `m`. The complement represents the price of the second flavor we are looking for.

```javascript
if (iceCream[complement]) {
    return [iceCream[complement], i + 1];
}
```
- If the complement flavor exists in the `iceCream` map, this means we have found our two flavors. We return their 1-indexed positions as an array.

```javascript
iceCream[arr[i]] = i + 1;
```
- If the complement isn't found, we store the current flavor's 1-indexed position in the `iceCream` map.

The function concludes after either returning the pair of flavors or after iterating through all flavors in `arr`.
****

## 13. Balanced Sums
  - [Problem](https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/sherlock-and-array.js)
  - Explanation:
  > The `balancedSums` function aims to determine if there exists an element in the array, `arr`, for which the sum of all elements to the left is equal to the sum of all elements to the right. If such an element exists, the function returns "YES"; otherwise, it returns "NO". The function uses a two-pass algorithm: the first pass calculates the total sum of `arr`, and the second pass checks for the balance by adjusting the left sum and right sum.

```javascript
function balancedSums(arr) {
    let leftSum = 0;
    let totalSum = arr.reduce((acc, val) => acc + val, 0);

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) {
            return "YES";
        } else {
            leftSum += arr[i];
        }
    }
    return "NO";
}
```
Here's a breakdown of the function:
```javascript
let leftSum = 0;
```
- The `leftSum` variable tracks the cumulative sum of elements on the left side of the current element.

```javascript
let totalSum = arr.reduce((acc, val) => acc + val, 0);
```
- Using the `reduce` method, we calculate the total sum of all elements in `arr`.

```javascript
for (let i = 0; i < arr.length; i++) {
```
- Loop through each element in `arr`.

```javascript
let rightSum = totalSum - leftSum - arr[i];
```
- Calculate the sum of elements on the right side of the current element. We achieve this by subtracting the `leftSum` and the current element's value from `totalSum`.

```javascript
if (leftSum === rightSum) {
    return "YES";
}
```
- If the left and right sums are equal for the current element, the array has a balance, and we return "YES".

```javascript
else {
    leftSum += arr[i];
}
```
- If a balance is not found for the current element, update the `leftSum` by adding the current element's value.

```javascript
return "NO";
```
- If the loop completes without finding a balance, return "NO".
****

## 14. Minimum Absolute Difference
  - [Problem](https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/minimum-absolute-difference-in-an-array.js)
  - Explanation:
  > The `minimumAbsoluteDifference` function is designed to find the minimum absolute difference between any two elements in the given array `arr`.

```javascript
function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let minValue = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let absValue = Math.abs(arr[i] - arr[i + 1]);
        if (absValue < minValue) {
            minValue = absValue;
        }
    }
    return minValue;
}
```
Here's a breakdown of the function:
```javascript
arr.sort((a, b) => a - b);
let minValue = Infinity;
```
- Sorting the array in non-decreasing order is the initial step. By doing this, the numbers with the least difference between them will be adjacent to each other.
- `minValue` is initialized to `Infinity`, ensuring that any absolute difference calculated will be smaller than this initial value.

```javascript
for (let i = 0; i < arr.length - 1; i++) {
	let absValue = Math.abs(arr[i] - arr[i + 1]);
```
- We loop through the sorted array, considering every adjacent pair of numbers.
- For each adjacent pair, we calculate the absolute difference between them.

```javascript
if (absValue < minValue) {
    minValue = absValue;
}
```
- If the absolute difference of the current adjacent pair is smaller than our current `minValue`, then we update `minValue`.

```javascript
return minValue;
```
- Once the loop completes, we have the minimum absolute difference, which we return.
****

## 15. Marc's Cakewalk
  - [Problem](https://www.hackerrank.com/challenges/marcs-cakewalk/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/marcs-cakewalk.js)
  - Explanation:
  > The `marcsCakewalk` function determines the minimum number of miles Marc must walk to maintain his weight after consuming the cupcakes described by the `calorie` array. Marc can consume the cupcakes in any order. For every calorie he takes in, he must walk 2^(number of cupcakes already eaten) miles to burn it off. To minimize the total miles he needs to walk, Marc should consume the cupcakes with the most calories first.

```javascript
function marcsCakewalk(calorie) {
     return calorie
	 	.sort((a, b) => b - a)
		.reduce((acc, val, i) => acc + (Math.pow(2, i) * val), 0);
}
```
Here's a breakdown of the function:
```javascript
calorie.sort((a, b) => b - a)
```
- Sorting the `calorie` array in descending order ensures that Marc consumes the cupcakes with the highest calories first. This is essential to minimize the walking distance.

```javascript
.reduce((acc, val, i) => acc + (Math.pow(2, i) * val), 0);
```
- We use the `reduce` method to calculate the total walking distance Marc needs to cover.
- For each calorie value `val` in the array (which is now in descending order), Marc needs to walk `Math.pow(2, i) * val` miles, where `i` is the index (or the number of cupcakes he has already eaten).
- `acc` accumulates the total miles, starting at `0` (as set by the last parameter of `reduce`).
- The result of the `reduce` method is the total distance Marc needs to walk, and this is directly returned by the function.
****

## 16. Grid Challenge
  - [Problem](https://www.hackerrank.com/challenges/grid-challenge/problem?isFullScreen=true)
  - [Solution](https://github.com/Jenin82/hacker-rank-tch/blob/main/grid-challenge.js)
  - Explanation:
  > The `gridChallenge` function determines whether the rows of a grid can be sorted (in non-decreasing order) such that the resultant columns are also sorted in non-decreasing order. If it's possible, the function returns 'YES', otherwise it returns 'NO'.

```javascript
function gridChallenge(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join("");
        if (i !== 0) {
            for (let col = 0; col < grid[i].length; col++) {
                if (grid[i][col].localeCompare(grid[i - 1][col]) < 0) {
                    return 'NO';
                }
            }
        }
    }
    return 'YES';
}
```
Here's a breakdown of the function:
```javascript
grid[i] = grid[i].split("").sort().join("");
```
- Each row (string) in the grid is split into an array of characters, sorted alphabetically, and then joined back into a string. This ensures each row is in non-decreasing order.

```javascript
for (let col = 0; col < grid[i].length; col++) {
    if (grid[i][col].localeCompare(grid[i - 1][col]) < 0) {
        return 'NO';
    }
}
```
- After the rows are sorted, we need to check if the columns are also sorted.
- Starting from the second row (`i !== 0`), we compare each character in the current row with the corresponding character in the previous row. If any character in the current row is less than the corresponding character in the previous row, the grid columns aren't sorted in non-decreasing order. Thus, we return 'NO'.

```javascript
return 'YES';
```
- If the loop completes without returning 'NO', it means the columns are in non-decreasing order after the rows have been sorted. So, we return 'YES'.
****
