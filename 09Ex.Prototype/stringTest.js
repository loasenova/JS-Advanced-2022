function test(str){

    let string = "string";
    let result = str.indexOf(string);
    console.log(result)

    let neededIndex = str.length - string.length;
    console.log(neededIndex)

  
}

test('hello my string');