function diagonalSums(matrix){

    let firstIndex = 0;
    let secondIndex = matrix[0].length -1;

    let firstSum = 0;
    let secondSum = 0;

    for(let row = 0; row < matrix.length; row++){

        firstSum += matrix[row][firstIndex];
        secondSum += matrix[row][secondIndex];

        firstIndex++;
        secondIndex--;
    }

console.log(`${firstSum} ${secondSum}`);

}
diagonalSums([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]);