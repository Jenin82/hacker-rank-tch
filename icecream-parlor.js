function icecreamParlor(m, arr) {
    const iceCream = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = m - arr[i];
        if (iceCream[complement]) {
            return [iceCream[complement], i + 1];
        }
        iceCream[arr[i]] = i + 1;
    }
}