function cooking(inputNum, command1, command2, command3, command4, command5){

    inputNum = manipulator(inputNum, command1);
    inputNum = manipulator(inputNum, command2);
    inputNum = manipulator(inputNum, command3);
    inputNum = manipulator(inputNum, command4);
    inputNum = manipulator(inputNum, command5);

    function manipulator(num, command){
    switch(command){
        case "chop":
            num /= 2;
            console.log(num);
            break;
        case "dice":
            num = Math.sqrt(num);
            console.log(num);
            break;
        case "spice":
            num += 1;
            console.log(num);
            break;
        case "bake":
            num *= 3;
            console.log(num);
            break;
        case "fillet":
            num *= 0.80;
            console.log(num);
            break;               
    }
    return num;
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');