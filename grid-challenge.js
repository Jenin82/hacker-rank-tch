function gridChallenge(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join("");
        if (i !== 0) {
            for (let col = 0; col < grid[i].length; col++) {
                if (grid[i][col].localeCompare(grid[i - 1][col]) < 0) {
                    return "NO";
                }
            }
        }
    }
    return "YES";
}