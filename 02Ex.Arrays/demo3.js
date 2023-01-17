function bigSmallSorter(arr) {
    let sortedArr = [...arr.sort((n, k) => n - k)];
    //console.log(sortedArr)
    let newArr = [];
    let flip = true;
  
    for( let i of arr ) {
        let temp = flip ? sortedArr.shift() : sortedArr.pop();
        newArr.push(temp);
        flip = !flip;
    }
  
    return newArr;
  }

  console.log(bigSmallSorter(([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])))