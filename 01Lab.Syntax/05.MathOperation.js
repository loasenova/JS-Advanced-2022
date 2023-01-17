function mathOperation(n1, n2, operation){

    let result;

    switch(operation){
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        case "%":
            result = n1 % n2;
            break;
        case "**":
            result = n1 ** n2;
            break;
    }

    console.log(result);

}
mathOperation(5, 6, '+');
mathOperation(3, 5.5, '*');