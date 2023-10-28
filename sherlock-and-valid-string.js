function isValid(s) {
    let data = {};
    for (let char of s) {
        data[char] = (data[char] || 0) + 1;
    }

    let counts = Object.values(data);
    let uniqueCounts = [...new Set(counts)];

    if (uniqueCounts.length === 1) {
        return "YES";
    } else if (uniqueCounts.length === 2) {
        let flag = true;
        for (let count of counts) {
            if (count !== counts[0] && flag) {
                flag = false;
            } else if (count !== counts[0]) {
                return "NO";
            }
        }
        return "YES";
    } else {
        return "NO";
    }
}