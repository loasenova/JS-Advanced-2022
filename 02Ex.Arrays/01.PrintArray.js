function printArray(arr, delimiter){

    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }
    return result.join(`${delimiter}`);
   //return arr.forEach(element => console.log(element + delimiter));
    
}
console.log(printArray(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'));
