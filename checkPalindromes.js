function palindrome(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let len = str.length;
    for (let i = 0; i < (len / 2); i++) {
        if (str[i] !== str[len - (i + 1)]) {
            return false;
        }
    }
    return true;
}