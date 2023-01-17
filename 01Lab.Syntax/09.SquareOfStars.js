function squareOfStars(number){

    let buff = '';
    for(let i = 0; i < number; i++){
        for(let j = 0; j < number; j++){
            buff += "* ";
        }
        buff += "\n";
    }
    console.log(buff);
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);