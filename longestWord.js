function findLongestWord(str) {
    let result = 0;
    for (let word of str.split(" ")) {
        if (word.length > result) {
            result = word.length;
        }
    }
    return result;
}