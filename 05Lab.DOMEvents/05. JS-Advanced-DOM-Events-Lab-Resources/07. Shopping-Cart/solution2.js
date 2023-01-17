function solve(){

    let products = document.getElementsByClassName("shopping-cart")[0];
    products.addEventListener("click", onClick);
    document.getElementsByClassName("checkout")[0].addEventListener("click", checkOut);

    let result = document.getElementsByTagName("textarea")[0];
    let total = 0;
    let list = [];

    function onClick(event){

        let btn = event.target;

        if(event.target.nodeName !== "BUTTON"){
           //console.log("CLICKED!");} proverka
           return;
        }

        if(Array.from(btn.classList).includes("add-product")){

        let product = event.target.parentElement.parentElement;
        let productName = product.getElementsByClassName("product-title")[0].textContent;
        let productPrice = product.getElementsByClassName("product-line-price")[0].textContent;
        result.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
        total += Number(productPrice);

        if(!list.includes(productName)){
            list.push(productName);
        }
        //console.log(total)
        //console.log(list);
        }
    }

    function checkOut(){

        result.textContent += `You bought ${list.join(", ")} for ${total.toFixed(2)}.`
        Array.from(document.querySelectorAll("button")).forEach(btn => btn.disabled = true)
    }
}