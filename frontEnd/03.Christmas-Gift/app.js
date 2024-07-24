const url = `http://localhost:3030/jsonstore/gifts/`;
const itemsDiv = document.getElementById(`gift-list`);
const loadBtn = document.getElementById(`load-presents`);
const addBtn = document.getElementById(`add-present`);
const editBtn = document.getElementById(`edit-present`);
const giftElement = document.getElementById(`gift`);
const forElement = document.getElementById(`for`);
const priceElement = document.getElementById(`price`);

loadBtn.addEventListener(`click`, loadGifts);
addBtn.addEventListener(`click`, addGift);

let _id;

function clearForm() {
    giftElement.value = ``;
    forElement.value = ``;
    priceElement.value = ``;
}

async function loadGifts() {

    itemsDiv.innerHTML = ``;
    const req = await fetch(url);
    const response = Object.entries(await req.json());

    for (const i of response) {

        const contentDiv = document.createElement(`div`);
        const buttonsContainer = document.createElement(`div`);
        const giftsSock = document.createElement(`div`);
        const changeBtn = document.createElement(`button`);
        const deleteBtn = document.createElement(`button`);

        changeBtn.classList.add(`change-btn`);
        deleteBtn.classList.add(`delete-btn`);
        giftsSock.classList.add(`gift-sock`);
        contentDiv.classList.add(`content`);

        changeBtn.textContent = `Change`;
        deleteBtn.textContent = `Delete`;

        changeBtn.addEventListener(`click`, onChange);
        deleteBtn.addEventListener(`click`, onDelete);

        buttonsContainer.appendChild(changeBtn);
        buttonsContainer.appendChild(deleteBtn);
        deleteBtn.id = i[0];

        contentDiv.innerHTML = `<p>${i[1].gift}</p>
                <p>${i[1].for}</p>
                <p>${i[1].price}</p>`;

        giftsSock.appendChild(contentDiv);
        giftsSock.appendChild(buttonsContainer);
        itemsDiv.appendChild(giftsSock);

        async function onChange(event) {
            giftElement.value = `${i[1].gift}`;
            forElement.value = `${i[1].for}`;
            priceElement.value = `${i[1].price}`;

            event.target.parentElement.parentElement.remove();

            addBtn.disabled = true;
            editBtn.disabled = false;
            _id = i[0];
        }
        async function onDelete(event) {
            const id = event.target.id;
            const req = await fetch(url + id, { method: "DELETE" });
            loadGifts()
        }
    }
};

async function addGift() {

    const gift = giftElement.value;
    const forValue = forElement.value;
    const price = priceElement.value;

    if (!gift || !forValue || !price) {
        return
    }

    await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ gift, for: forValue, price })
    });

    clearForm();
    loadGifts();
};

editBtn.addEventListener(`click`, async () => {
    const gift = giftElement.value;
    const forValue = forElement.value;
    const price = priceElement.value;

    if (!gift || !forValue || !price) {
        return
    }

    await fetch(url + _id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ gift, for: forValue, price, _id })
    });

    clearForm();
    addBtn.disabled = false;
    editBtn.disabled = true;
    loadGifts();
})