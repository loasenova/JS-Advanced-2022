function magicMatrices(matrix){

    for(let row = 0; row < matrix.length - 1; row++){

        let rowOneSum = matrix[row].reduce((total, curr) => total + curr);
        let rowTwoSum = matrix[row+1].reduce((total, curr) => total + curr);
        let colOneSum = 0;
        let colTwoSum = 0;

        for(let col = 0; col < matrix.length; col++){

            colOneSum += matrix[row][col];
            colTwoSum += matrix[row+1][col];
        }

        if(rowOneSum !== rowTwoSum || colOneSum !== colTwoSum){
            return false;
        }
        
    }

 
    return true;
}
console.log(magicMatrices( [[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]]));