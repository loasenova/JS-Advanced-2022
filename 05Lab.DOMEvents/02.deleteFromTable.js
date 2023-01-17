function deleteByEmail() {
    
    let email = document.getElementsByName("email")[0].value;
    let secondCol = document.querySelectorAll("#customers tr td:nth-child(2)");

    for(let td of secondCol){
        if(td.textContent == email){
            td.parentElement.remove();
            document.getElementById("result").textContent = "Deleted.";
            return;
        }
        document.getElementById("result").textContent = "Not found.";
    }
}