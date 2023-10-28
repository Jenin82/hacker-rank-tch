function twoStrings(s1, s2) {
    for (let item of s1) {
        if (s2.includes(item)) {
            return "YES";
        }
    }
    return "NO";
}