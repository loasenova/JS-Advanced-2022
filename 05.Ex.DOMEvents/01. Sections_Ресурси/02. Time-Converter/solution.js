function attachEventsListeners() {

let buttons = document.querySelectorAll("[value=Convert]");

for(let button of buttons){

    button.addEventListener("click", onClick);

}

function onClick(event){

    let value = Number(event.target.parentElement.querySelector("[type=text]").value);
    let data = event.target.id;

    if(data === "daysBtn"){
        calc(value);
    }else if(data === "hoursBtn"){
        calc(value/24);
    }else if(data === "minutesBtn"){
        calc(value/24/60);
    }else if(data === "secondsBtn"){
        calc(value/24/60/60);
    }
}

function calc(value){
    let inputs = Array.from(document.querySelectorAll("[type=text]"));
    inputs.shift().value = value;
    let currVal = value * 24;
    for(let input of inputs){
        input.value = currVal;
        currVal *= 60;
    }
}
}