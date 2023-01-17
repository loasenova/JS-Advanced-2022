function largestNum(n1, n2, n3){

    let largest;
    if(n1 > n2 && n1 > n3){
        largest = n1;
    }else if(n2 > n1 && n2 > n3){
        largest = n2;
    }else if(n3 > n1 && n3 > n2){
        largest = n3;
    }
    console.log(`The largest number is ${largest}.`);
}
largestNum(5, -3, 16);