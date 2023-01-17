function demo1(fruit, weight, price){

    let weightKg = weight / 1000;
    let money = weightKg * price;

    console.log(`I need ${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

demo1('orange', 2500, 1.80);
demo1('apple', 1563, 2.35);