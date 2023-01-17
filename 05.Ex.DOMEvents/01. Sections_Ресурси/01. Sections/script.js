function create(words) {
   
   for(let word of words){
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      div.appendChild(p);
      document.getElementById("content").appendChild(div);

      div.addEventListener("click", () =>{
         p.style.display = "block"
      });

   }  
}

