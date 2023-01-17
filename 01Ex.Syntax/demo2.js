function demo2(num1, num2){

    let gcd;
    for(let i = 1; i <= num1 && i <= num2; i++){
        if(num1 % i == 0 && num2 % i == 0){
            gcd = i
        }
    }

    console.log(gcd);
}
demo2(15, 5);
demo2(2154, 458)