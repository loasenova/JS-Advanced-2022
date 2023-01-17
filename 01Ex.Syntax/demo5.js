function demo5(steps, footprint, speed){

    let metres = steps * footprint;
    let speedSec = speed / 3.6;
    let studentBreaks = Math.floor(metres / 500);
    //console.log(studentBreak);
    let totalTimeInSec = (metres / speedSec);
    //console.log(totalTime);

    let hours = Math.floor(totalTimeInSec / 3600);
    //console.log(hours);
    let minutes = Math.floor(totalTimeInSec / 60);
    //console.log(minutes);
    let seconds = Number((totalTimeInSec - (minutes * 60)).toFixed(0));
    //console.log(seconds);
    minutes += studentBreaks;
    //console.log(minutes);
    
    if(seconds < 10){
        seconds = `0${seconds}`;
    }else {
        seconds;
    }

    if(minutes < 10){
        minutes = `0${minutes}`;
    }else {
        minutes;
    }

    if(hours < 10){
        hours = `0${hours}`;
    }else {
        hours;
    }

    console.log(`${hours}:${minutes}:${seconds}`)

}
demo5(4000, 0.60, 5);
demo5(2564, 0.70, 5.5);