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