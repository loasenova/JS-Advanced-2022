function sumOfNumbers(str1, str2){

    let n1 = Number(str1);
    let n2 = Number(str2);
    let result = 0;

    for(let i = n1; i <= n2; i++){
        result += i;
    }

    console.log(result);
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');