function stringLength(str1, str2, str3){

    let length = str1.length + str2.length + str3.length;
    let average = length / 3;

    console.log(length);
    console.log(Math.floor(average));
}
stringLength('chocolate', 'ice cream', 'cake');