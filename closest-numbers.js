function closestNumbers(arr) {
    let minimum = 0;
    arr.sort((a, b) => a - b);
    let sortedList = [];
    for (let index = 0; index < arr.length - 1; index++) {
        sortedList.push([arr[index], arr[index + 1]]);
        if (index === 0 || arr[index + 1] - arr[index] < minimum) {
            minimum = arr[index + 1] - arr[index];
        }
    }
    return sortedList.filter((pair) => pair[1] - pair[0] === minimum).flat();
}