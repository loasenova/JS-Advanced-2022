function demo6(speed, area){

let areaSpeeds = {
    'motorway' : 130,
    'interstate' : 90,
    'city' : 50,
    'residential' : 20
} 

    if(speed > areaSpeeds[area]){
        let diff = speed - areaSpeeds[area];
        textStatus(diff);
    }else{
        console.log(`Driving ${speed} km/h in a ${areaSpeeds[area]} zone`);
    }

    function textStatus(diff){
        if(diff >= 20){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${areaSpeeds[area]} - speeding`);
        }else if(diff >= 40){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${areaSpeeds[area]} - excessive speeding`)
        }else{
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${areaSpeeds[area]} - reckless driving.`)
        }
    }

}
demo6(40, 'city');