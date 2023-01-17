function roadRadar(speed, area){
        let allowedSpeeds = {
            'motorway': 130,
            'interstate': 90,
            'city': 50,
            'residential': 20
        }
        if (speed > allowedSpeeds[area]) {
            let speeding = speed - allowedSpeeds[area];
            logSpeeding(speeding);
        }else{
            console.log(`Driving ${speed} km/h in a ${allowedSpeeds[area]} zone`)
        }
     
        function logSpeeding(speeding) {
            if (speeding <= 20) {
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - speeding`);
            } else if (speeding <= 40) {
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - excessive speeding`);
            } else {
                console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - reckless driving`);
            }
        }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
