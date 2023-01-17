function biggerHalf(array){

    let sorted = array.sort((a, b) => a - b)
                        .slice(array.length/2);
    
    return sorted;

}
console.log(biggerHalf([4, 7, 2, 5]));