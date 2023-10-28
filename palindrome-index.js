function palindromeIndex(s) {
    const r = s.split("").reverse().join("");
    if (s === r) {
        return -1;
    }
    for (let i = 0; i < s.length; ++i) {
        if (
            s.substring(0, i) + s.substring(i + 1) ===
            r.substring(0, s.length - 1 - i) + r.substring(s.length - i)
        ) {
            return i;
        }
    }
}