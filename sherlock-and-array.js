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