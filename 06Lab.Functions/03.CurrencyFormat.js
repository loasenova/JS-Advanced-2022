function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;

    result += value.toFixed(2).substr(-2,2);

    if(symbolFirst){
        return symbol + ' ' + result;
    }else{
        return result + ' ' + symbol;
    }
}

function createFormatter(separator, symbol, symbolFirst, currencyFormatter){


    return function formatter(value){
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
}


//console.log(currencyFormatter(',', '$', true, 5345))

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));