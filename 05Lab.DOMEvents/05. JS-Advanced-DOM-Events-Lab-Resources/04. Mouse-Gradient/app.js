function attachGradientEvents() {
    
    let result = document.getElementById("result");
    let element = document.getElementById("gradient");

    element.addEventListener("mousemove", move);
    element.addEventListener("mouseout", out)

    function move(event){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = power + "%"
    };

    function out(){
        result.textContent = "";
    };
}