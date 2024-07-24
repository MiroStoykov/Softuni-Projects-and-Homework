function attachEvents() {
    // "<person>: <phone> "
    const phonebook = document.getElementById(`phonebook`);
    const url = `http://localhost:3030/jsonstore/phonebook/`;
    const btnLoad = document.getElementById(`btnLoad`).addEventListener(`click`, onClickLoad);
    const btnCreate = document.getElementById(`btnCreate`).addEventListener(`click`, onClickCreate);
    const person = document.getElementById(`person`);
    const phone = document.getElementById(`phone`);


    async function onClickLoad() {
        phonebook.textContent = ``;
        const response = await fetch(url);
        const data = Object.values(await response.json());

        for (const i of data) {
            const li = document.createElement(`li`);
            const deleteBtn = document.createElement(`button`);
            deleteBtn.textContent = `Delete`;
            deleteBtn.setAttribute(`data-id`, i._id);
            deleteBtn.addEventListener(`click`, async () => {
                li.remove();
                const response = await fetch(url + i._id, {
                    method: `Delete`,
                    headers: { "Content-Type": "application/json" }
                })
                const data = await response.json();
            })
            li.textContent = `${i.person}: ${i.phone}`;
            li.appendChild(deleteBtn);
            phonebook.appendChild(li);
        }

    }

    async function onClickCreate() {
        const obj = {
            person: person.value,
            phone: phone.value
        }

        const response = await fetch(url, {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        })

        const data = await response.json();

        person.value = ``;
        phone.value = ``;
    }
}

attachEvents();