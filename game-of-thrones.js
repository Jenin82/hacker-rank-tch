function gameOfThrones(s) {
    let oddcount = 0;
    while (s.length > 0) {
        const char = s[0];
        const count = s.split(char).length - 1;
        if (count % 2 !== 0) {
            oddcount++;
        }
        s = s.replace(new RegExp(char, "g"), "");
        if (oddcount > 1) {
            return "NO";
        }
    }
    return "YES";
}