function argumentInfo(...arr){

let result = {};

for(let element of arr){
    console.log(`${typeof(element)}: ${element}`);

    if(!result.hasOwnProperty(typeof(element))){
        result[typeof(element)] = 0;
    }

    result[typeof(element)] += 1;
    
}
    let buff = '';
    for(let [k,v] of Object.entries(result)){
        buff += `${k} = ${v}\n`;
    }
    console.log(buff);
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })