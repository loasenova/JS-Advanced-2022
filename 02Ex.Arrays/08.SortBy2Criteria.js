function sortBy2Criteria(array){

    return array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }).join("\n");
}

console.log(sortBy2Criteria(['alpha', 
'beta', 
'gamma']));