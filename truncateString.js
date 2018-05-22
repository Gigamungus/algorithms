function truncateString(str, num) {
    return (str.length <= num) ? str :
        num < 3 ? str.slice(0, num) + "..." :
            str.slice(0, num - 3) + "...";
}