function search() {
   
   let towns = document.querySelectorAll("#towns");
   //let townsArr = Array.from(towns);
   let text = document.getElementById("searchText").textContent;

   let counter = 0;

   let result = document.getElementById("result").textContent;

   for(let town of towns){
      if(town.includes(text)){
         counter ++;
         town.style.
         result = `${counter} matches found`
      }
   }
}
