function extract(array){

    let result = [];
    let biggestEl = array.shift();
    result.push(biggestEl);

    for(el of array){

        if(el >= biggestEl){
            result.push(el);
            biggestEl = el;
        }
    }
    return result;

}
console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));