function titleCase(str) {
    return str.toLowerCase().split(" ").map(function (x) {
        x = x.split("");
        if (x.length > 0) {
            x[0] = x[0].toUpperCase();
        }
        return x.join("");
    }).join(" ");
}

console.log(titleCase("sdfv sdfbgh  dvs dfvsd vsf sdcSDC"));