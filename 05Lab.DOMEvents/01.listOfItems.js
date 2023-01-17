function addItem(){

    //get the value of #newItemText
    let text = document.getElementById("newItemText").value;

    //create li element
    let li = document.createElement("li");

    //append text to li
    li.textContent = text;

    //append li to #item
    document.getElementById("items").appendChild(li);

    //clear the input
    //document.getElementById("newItemText").value = "";
    text = "";

}