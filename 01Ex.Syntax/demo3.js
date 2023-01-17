function demo3(num){

    let numToStr = num.toString();
    let sum = 0;
    let firstDigit = numToStr[0];
    let isSame = true;
   // console.log(numToStr)

   for(let i = 0; i < numToStr.length; i++){
       sum += Number(numToStr[i]);

       if(numToStr[i] !== firstDigit){
           isSame = false;
       }
   }

   console.log(isSame);
   console.log(sum);

}
demo3(2222222);
demo3(1234);