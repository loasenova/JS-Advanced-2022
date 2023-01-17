function rotateArray(array, num){

    let lastFirst; 

    for(let i = 0; i < num; i++){
        lastFirst = array.pop();
        array.unshift(lastFirst);
    }

    return array.join(" ");
}
console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2));