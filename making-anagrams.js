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
    return s2.length + s1.length - commonItems * 2;
}