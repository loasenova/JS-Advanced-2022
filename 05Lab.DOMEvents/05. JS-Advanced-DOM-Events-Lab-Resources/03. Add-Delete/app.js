function addItem() {

    //take the value of input
    let text = document.getElementById("newItemText").value;
    //create new li element
    let li = document.createElement("li");
    //append text to li
    li.textContent = text;

    let deleteBtn = document.createElement("a");
    let btnText = document.createTextNode("[Delete]");
    deleteBtn.appendChild(btnText);
    deleteBtn.href = "#";
    deleteBtn.addEventListener("click", deleteF);

    function deleteF(){
        li.remove();
        //console.log(event);
    }

    //append button to li
    li.appendChild(deleteBtn);
    //append li to document
    document.getElementById("items").appendChild(li); // ul.append(li)
    //clear the input
    document.getElementById("newItemText").value = "";
   
}