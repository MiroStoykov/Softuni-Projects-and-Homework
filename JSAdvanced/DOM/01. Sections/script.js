function create(words) {
   for (const i of words) {
      let content = document.getElementById("content");
      let divEl = document.createElement("div");
      let pEl = document.createElement("p");

      pEl.textContent = i;

      pEl.style.display = "none";

      divEl.addEventListener("click", onClick);

      divEl.appendChild(pEl);

      content.appendChild(divEl);

      function onClick(event) {
         pEl.style.display = "block";
      }
   }

}