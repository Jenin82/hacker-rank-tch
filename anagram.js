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