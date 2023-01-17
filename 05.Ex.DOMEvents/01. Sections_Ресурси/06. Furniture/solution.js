function solve() {

  let buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate(){

    let currentItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
    let tableBody = document.getElementsByTagName("tbody")[0];
    for(let item of currentItems){
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td><img src=${item.img}></td>
                            <td><p>${item.name}</p></td>
                            <td><p>${item.price}</p></td>
                            <td><p>${item.decFactor}</p></td>
                            <td><input type="checkbox"></td>`;
      tableBody.appendChild(tableRow);
    }
    //console.log("generate")
  }

  function buy(){

    let result = '';
    let bought = [];
    let totalPrice = 0;
    let avgFac = 0;
    let checkedItems = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));
    //console.log("buy")
    for(let item of checkedItems){
      let parentRow = item.parentNode.parentNode;
      bought.push(parentRow.children[1].textContent.trim());
      totalPrice += Number(parentRow.children[2].textContent);
      avgFac += Number(parentRow.children[3].textContent);
    }
    result += `Bought furniture: ${bought.join(", ")}\n`;
    result += `Total price: ${totalPrice.toFixed(2)}\n`;
    result += `Average decoration factor: ${avgFac/checkedItems.length}`;

    document.querySelectorAll("textarea")[1].textContent = result;
  }
}