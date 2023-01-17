function dayOfWeek(string){

    let dayN;

    switch(string){
        case "Monday": dayN = 1; break;
        case "Tuesday": dayN = 2; break;
        case "Wednesday": dayN = 3; break; 
        case "Thursday": dayN = 4; break;
        case "Friday": dayN = 5; break; 
        case "Saturday": dayN = 6; break; 
        case "Sunday": dayN = 7; break;
        default: dayN = "error"; break;

    }
    console.log(`${dayN}`);

}
dayOfWeek("Monday");
dayOfWeek("Friday");
dayOfWeek("neshto");