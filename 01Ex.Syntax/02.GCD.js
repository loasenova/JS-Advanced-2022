function gsd(num1, num2){

    while(num2){
        let greatestDivisor = num2;
        num2 = num1%num2;
        num1 = greatestDivisor
    }
    return num1;

}
console.log(gsd(15, 5));