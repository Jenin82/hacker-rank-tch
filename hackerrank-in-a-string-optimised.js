function hackerrankInString(s, test = "hackerrank", count = 0) {
    // Check if the count has reached the length of the test string
    if (count === test.length) {
        return "YES";
    }
    // Check if string has any characters left to compare
    if (s.length <= 0) {
        return "NO";
    }
    // Check the current character, 
	// If it matches, increment count and call the function with the remaining string 
	// Else call funtion with remaining string
	return hackerrankInString(s.slice(1), test, s[0] === test[count] ? count + 1 : count);
}