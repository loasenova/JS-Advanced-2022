function addAndRemove(arr){

    let result = [];
    let num = 1;

    arr.forEach(element => {
        element === "add" ? result.push(num) : result.pop();
        num++;
    });
    return result.length === 0 ? "Empty" : result.join("\n");
}
console.log(addAndRemove(['add', 
'add', 
'add', 
'add']));