function carFactory(car1){

    let car2 = {};
    car2.model = car1.model;

    if(car1.power <= 90){
        car2.engine = {
            power: 90,
            volume: 1800
        }
    }else if(car1.power <= 120){
        car2.engine = {
            power: 120,
            volume: 2400
        }
    }else{
        car2.engine = {
            power: 200,
            volume:3500
        }
    }

    car2.carriage = {
        type: car1.carriage,
        color: car1.color
    }

    if(car1.wheelsize % 2 == 0){
        car1.wheelsize -= 1;
    }
    car2.wheels = [car1.wheelsize, car1.wheelsize, car1.wheelsize, car1.wheelsize];

    return(car2);
    

}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))