function listOfNames(array){

    let sorted = array.sort((a, b) => a.localeCompare(b));
   
    for(let i = 0; i < array.length; i++){
        console.log(`${i+1}.${sorted[i]}`)
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"]);