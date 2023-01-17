function sum(){

    let firstNum = document.getElementById("first").value;
    let secondNum = document.getElementById("second").value;

    let result = Number(firstNum) + Number(secondNum);

    document.getElementById("result").textContent = `Result: ${result}`
}