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