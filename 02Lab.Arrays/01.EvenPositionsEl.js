function evenPositionEl(array){

    let result = '';

    for(let i = 0; i < array.length; i += 2){
        result += array[i];
        result += ' ';
    }

    console.log(result);

}
evenPositionEl(['20','30','40','50','60']);