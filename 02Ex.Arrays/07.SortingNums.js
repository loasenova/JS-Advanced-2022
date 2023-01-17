function sortingNums(array){

    let result = [];

    let sorted = array.sort((a, b) => a - b);

    let flip = true; 

    for(let i of array){

        let temp = flip ? sorted.shift() : sorted.pop();
        result.push(temp);
        flip = !flip;
    }

    return result;

}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 70]));
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, -5]));