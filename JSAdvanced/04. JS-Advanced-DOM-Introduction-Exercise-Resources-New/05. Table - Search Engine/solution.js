function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let some = Array.from(document.getElementsByTagName(`tbody`));

      let trs = Array.from(some[0].children);

      let searchedValue = document.getElementById(`searchField`).value;

      for (const i of trs) {
         i.classList.remove("select");

         let counter = false;

         let children = Array.from(i.children);

         for (const j of children) {
            if (j.innerHTML.match(searchedValue)) {
               counter = true;
            }
         }
         if (counter && searchedValue.length > 0) {
            i.classList.add("select");
         }
      }
   }
}