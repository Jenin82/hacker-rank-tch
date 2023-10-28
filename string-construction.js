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