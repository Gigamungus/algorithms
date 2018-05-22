// returns the given string in reverse.
// I could have used the built in array reverse() method,
// but magic methods tend to defeat the purpose of practicing algorithms.
function reverseAString(str) {
    let arr = str.split("");

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }
    return arr.join("");
}
