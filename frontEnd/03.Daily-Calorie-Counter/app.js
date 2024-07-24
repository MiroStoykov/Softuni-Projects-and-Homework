//TODO

const url = `http://localhost:3030/jsonstore/tasks/`;

const loadBtn = document.getElementById(`load-meals`);
const addBtn = document.getElementById(`add-meal`);
const editBtn = document.getElementById(`edit-meal`);
const listDiv = document.getElementById(`list`);
const foodElement = document.getElementById(`food`);
const timeElement = document.getElementById(`time`);
const caloriesElement = document.getElementById(`calories`);
loadBtn.addEventListener(`click`, loadMeals);
listDiv.addEventListener(`click`, changeMeal);
addBtn.addEventListener(`click`, addMeal);
editBtn.addEventListener(`click`, editMeal);

let currentMealId;

async function loadMeals() {
    listDiv.textContent = ``;
    const req = await fetch(url);
    const response = Object.entries(await req.json());
    for (const i of response) {
        const divMeal = document.createElement(`div`);
        divMeal.classList.add(`meal`);
        divMeal.innerHTML = `
              <h2>${i[1].food}</h2>
              <h3>${i[1].time}</h3>
              <h3>${i[1].calories}</h3>
              <div id="meal-buttons">
                <button class="change-meal" id="${i[1]._id}">Change</button>
                <button class="delete-meal" >Delete</button>
              </div>`;
        listDiv.appendChild(divMeal);
    }
};

async function addMeal() {
    let calories = caloriesElement.value;
    let food = foodElement.value;
    let time = timeElement.value;

    await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ food, time, calories })
    });

    clearForm();
    loadMeals();
};

async function changeMeal(event) {
    if (event.target.tagName != `BUTTON`) {
        return;
    }

    if (event.target.classList[0] == `change-meal`) {
        const values = Array.from(event.target.parentElement.parentElement.children);

        foodElement.value = values[0].textContent;
        timeElement.value = values[1].textContent;
        caloriesElement.value = values[2].textContent;

        currentMealId = event.target.id;

        editBtn.disabled = false;
        addBtn.disabled = true;

        event.target.parentElement.parentElement.remove();
    }

    if (event.target.classList[0] == `delete-meal`) {
        const id = event.target.parentElement.parentElement.children[3].children[0].id;
        // console.log(btn);
        const req = await fetch(url + id, { method: "DELETE" });
        loadMeals();
    }


}

async function editMeal() {
    let calories = caloriesElement.value;
    let food = foodElement.value;
    let time = timeElement.value;
    const req = await fetch(url + currentMealId, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ food, time, calories, _id: currentMealId })
    });


    if (!req.ok) {
        return;
    }

    editBtn.disabled = true;
    addBtn.disabled = false;

    clearForm();
    loadMeals();
}

function clearForm() {
    foodElement.value = ``;
    timeElement.value = ``;
    caloriesElement.value = ``;
}
