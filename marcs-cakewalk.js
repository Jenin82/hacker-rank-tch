function marcsCakewalk(calorie) {
    return calorie
        .sort((a, b) => b - a)
        .reduce((acc, val, i) => acc + Math.pow(2, i) * val, 0);
}