function fruit(type, weight, price){

    let kg = weight / 1000;
    let total = kg * price;
    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);