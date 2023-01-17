function biggestEl(matrix){

    let biggestNum = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => row.forEach(
                        col => biggestNum = Math.max(biggestNum, col)));

    console.log(biggestNum);

}
biggestEl([[20, 50, 10],
            [8, 33, 145]]);