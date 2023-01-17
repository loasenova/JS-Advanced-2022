function solve() {

  let text = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;

  let textArr = text.split(" ");

  let result = "";

  if(type ===  "Camel Case"){
    textArr.forEach((element, i) => {
      if(i === 0){
         return result += element.toLowerCase();
      }
      return result += element[0].toUpperCase() + element.substring(1).toLowerCase();
    });
  }else if(type === "Pascal Case"){
    textArr.forEach((element, i) => {
      return result += element[0].toUpperCase() + element.substring(1).toLowerCase();
    });
  }else{
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}