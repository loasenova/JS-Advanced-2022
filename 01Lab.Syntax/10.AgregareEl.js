function agregateEl(array){

    let sum = 0;
    let sum2 = 0;
    let concatStr = '';

    for(let i = 0; i < array.length; i++){
        sum += array[i];
        sum2 += 1/array[i];
        concatStr += array[i];
    }

    console.log(sum);
    console.log(sum2);
    console.log(concatStr);
}
agregateEl([1, 2, 3]);
agregateEl([2, 4, 8, 16]);