function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = Array.from(document.getElementsByTagName("textarea"))[0].value.split("\"");

      let restaurantDiv = document.getElementById(`bestRestaurant`);

      let workersDiv = document.getElementById(`workers`);

      let workersList = Array.from(workersDiv.getElementsByTagName("p"))[0];

      let bestRestaurant = Array.from(restaurantDiv.getElementsByTagName("p"))[0];

      let restaurants = [];

      input.pop();
      input.shift();

      for (const i of input) {
         if (i != `,`) {
            let [name, workersAsStr] = i.split(` - `);
            let workers = workersAsStr.split(`, `);
            let counter3 = false;
            let index = 0;
            let average = 0;

            for (let e = 0; e < restaurants.length; e++) {
               if (e.name === name) {
                  counter3 = true;
                  index = e;
               }
            }
            if (!counter3) {
               let obj = {};
               obj.name = name;
               obj.workers = [];
               for (const j of workers) {
                  let current = j.split(` `);
                  let obj2 = {};
                  obj2.name = current[0];
                  obj2.salary = Number(current[1]);
                  obj.workers.push(obj2);
                  obj.workers.sort((a, b) => b.salary - a.salary);
                  average += Number(current[1]);
               }
               average /= workers.length;
               obj.average = average;
               restaurants.push(obj);
            } else {
               for (const j of workers) {
                  let current = j.split(` `);
                  let obj2 = {};
                  obj2.name = current[0];
                  obj2.salary = Number(current[1]);
                  restaurants[index].workers.push(obj2);
                  restaurants[index].workers.sort((a, b) => b.salary - a.salary);
                  average += Number(current[1]);
               }
               average /= workers.length;
               restaurants[index].average = average;
            }

         }
      }

      restaurants.sort((a, b) => b.average - a.average);

      bestRestaurant.innerHTML = `Name: ${restaurants[0].name} Average Salary: ${(restaurants[0].average).toFixed(2)} Best Salary: ${(restaurants[0].workers[0].salary).toFixed(2)}`;

      let workersArray = [];

      for (const j of restaurants[0].workers) {
         let str = `Name: ${j.name} With Salary: ${j.salary}`;
         workersArray.push(str);
      }

      workersList.innerHTML = workersArray.join(` `);
   }
}