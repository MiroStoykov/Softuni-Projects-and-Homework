const guestDiv = document.getElementById(`guest`);
const userDiv = document.getElementById(`user`);
let userData = JSON.parse(sessionStorage.getItem(`userData`));
const nameSpan = document.querySelector(`.email`).childNodes[1];
const logoutBtn = document.getElementById(`logout`).addEventListener(`click`, onLogout);
const addBtn = document.querySelector(`.add`);
const loadBtn = document.querySelector(`.load`).addEventListener(`click`, onLoad);
const catchesDiv = document.getElementById(`catches`);
document.getElementById(`addForm`).addEventListener(`submit`, onAdd);

const endpoints = {
    logout: `http://localhost:3030/users/logout`,
    catches: `http://localhost:3030/data/catches/`,
};

updateNav();

function updateNav() {
    if (userData) {
        guestDiv.style.display = `none`;
        userDiv.style.display = `inline-block`;
        nameSpan.textContent = userData.email;
        addBtn.disabled = false;
    } else {
        guestDiv.style.display = `inline-block`;
        userDiv.style.display = `none`;
        nameSpan.textContent = `guest`;
        addBtn.disabled = true;
    }
}

async function onLogout() {
    const options = {
        method: `get`,
        headers: {
            "X-Authorization": userData.accessToken
        }
    }
    await fetch(endpoints.logout, options);
    userData = null;
    sessionStorage.clear;
    updateNav();
}

async function onLoad() {
    catchesDiv.innerHTML = ``;
    const req = await fetch(endpoints.catches);
    const data = await req.json();
    data.forEach(x => {
        let catchDiv = document.createElement(`div`);
        catchDiv.classList.add("catch");
        catchDiv.innerHTML = `<label>Angler</label>
        <input type="text" class="angler" value="${x.angler}" ${checkId(x, userData)}>
        <label>Weight</label>
        <input type="text" class="weight" value="${x.weight}" ${checkId(x, userData)}>
        <label>Species</label>
        <input type="text" class="species" value="${x.species}"  ${checkId(x, userData)}>
        <label>Location</label>
        <input type="text" class="location" value="${x.location}" ${checkId(x, userData)}>
        <label>Bait</label>
        <input type="text" class="bait" value="${x.bait}" ${checkId(x, userData)}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${x.captureTime}" ${checkId(x, userData)}>
        <button class="update" data-id="${x._id}" ${checkId(x, userData)}>Update</button>
        <button class="delete" data-id="${x._id}" ${checkId(x, userData)}>Delete</button>`;
        catchesDiv.appendChild(catchDiv);

        document.querySelectorAll(`.update`).forEach(e => e.addEventListener(`click`, onUpdateClick));
        document.querySelectorAll(`.delete`).forEach(e => e.addEventListener(`click`, onDeleteClick));
    });

}

function checkId(a, b) {
    if (!a || !b || a._ownerId != b._id) {
        return `disabled`;
    } else {
        return ``;
    }
}

async function onAdd(e) {
    e.preventDefault();
    const formdate = new FormData(e.target);
    const angler = formdate.get(`angler`);
    const weight = formdate.get(`weight`);
    const species = formdate.get(`species`);
    const location = formdate.get(`location`);
    const bait = formdate.get(`bait`);
    const captureTime = formdate.get(`captureTime`);

    try {
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            throw new Error(`Inncorect data`)
        }

        const obj = {
            "angler": angler, "weight": weight, "species": species, "location": location, "bait": bait, "captureTime": captureTime
        }

        await fetch(endpoints.catches, {
            method: `post`,
            headers: {
                "Content-type": "application/json",
                "X-Authorization": userData.accessToken
            },
            body: JSON.stringify(obj)
        })

        onLoad();
    } catch (error) {
        alert(error)
    }
}

async function onUpdateClick(e) {
    const elements = e.target.parentNode.children;

    const obj = { "angler": "", "weight": null, "species": "", "location": "", "bait": "", "captureTime": null }

    Array.from(elements).forEach(e => {
        Object.keys(obj).forEach(el => {
            if (el == e.classList[0]) {
                obj[el] = e.value;
            }
        })
    })

    const req = await fetch(endpoints.catches + e.target.getAttribute("data-id"), {
        method: `put`,
        headers: {
            "Content-type": "application/json",
            "X-Authorization": userData.accessToken
        },
        body: JSON.stringify(obj)
    })
}

async function onDeleteClick(e) {
    const btn = e.target;

    const req = await fetch(endpoints.catches + e.target.getAttribute("data-id"), {
        method: `delete`,
        headers: {
            "Content-type": "application/json",
            "X-Authorization": userData.accessToken
        }
    })

    onLoad();
}
