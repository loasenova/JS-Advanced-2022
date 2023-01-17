function encodeAndDecodeMessages() {

    let buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);

    let texts = document.querySelectorAll("textarea");
    let text1 = texts[0];
    let text2 = texts[1];

    function encode(){
        let encodeText = "";
        let text1Value = text1.value;
        for(let i = 0; i < text1Value.length; i++){
            let currChar = text1Value[i].charCodeAt() + 1;
            encodeText += String.fromCharCode(currChar);
        }

        text2.value = encodeText;
        text1.value = "";
    }

    function decode(){
        let decodeText = "";
        let text2Value = text2.value;
        for(let i = 0; i < text2Value.length; i++){
            let currChar = text2Value[i].charCodeAt() - 1;
            decodeText += String.fromCharCode(currChar);
        }

        text2.value = decodeText;
    }

}