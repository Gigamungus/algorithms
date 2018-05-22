function largestOfArrays () {
    return [...arguments].reduce((acc, curr) => {
        let large = curr[0];
        for (let i = 1; i < curr.length; i++) {
            if (curr[i] > large) {
                large = curr[i];
            }
        }
        acc.push(large);
        return acc;
    }, []);
}
