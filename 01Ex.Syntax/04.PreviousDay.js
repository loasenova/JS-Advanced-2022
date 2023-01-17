function previousDay(year, month, day){

    let currDay = new Date(year, month - 1, day);
    currDay.setDate(currDay.getDate() - 1);
    console.log(`${currDay.getFullYear()}-${currDay.getMonth() + 1}-${currDay.getDate()}`);
}

previousDay(2016, 9, 30);