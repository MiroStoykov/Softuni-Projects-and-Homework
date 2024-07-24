function search() {

   let count = 0;

   let towns = Array.from(document.getElementById(`towns`).children);

   let searchText = document.getElementById(`searchText`).value;

   let result = document.getElementById(`result`);

   for (const i of towns) {
      let text = i.innerHTML;
      if (searchText === "") {
         continue;
      }
      if (text.match(searchText)) {
         i.style.textDecoration = "underline";
         i.style.fontWeight = "bold";
         count++;
      } else {
         i.style.textDecoration = "none";
         i.style.fontWeight = "normal";
      }
   }

   if (count > 0) {
      result.innerHTML = `${count} matches found`;
   }
}
