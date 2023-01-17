function smallestTwoNums(array){

    let sorted = array.sort((a, b) => a - b)
                        .splice(0, 2)
                        .join(' ');
                        
    console.log(sorted);

}
smallestTwoNums([30, 15, 50, 5]);