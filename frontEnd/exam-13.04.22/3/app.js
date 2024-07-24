//TODO...

const url = `http://localhost:3030/jsonstore/games/`;

const loadBtn = document.getElementById(`load-games`);
const addBtn = document.getElementById(`add-game`);
const editBtn = document.getElementById(`edit-game`);
const gameList = document.getElementById(`games-list`);
const gameNameInput = document.getElementById(`g-name`);
const gameTypeInput = document.getElementById(`type`);
const gamePlayersInput = document.getElementById(`players`);


loadBtn.addEventListener(`click`, onLoad);

async function onLoad() {
    gameList.textContent = ``;

    const req = await fetch(url);
    const response = Object.values(await req.json());


    for (const e of response) {

        // console.log(e);

        const contentDiv = document.createElement(`div`);
        const buttonsDiv = document.createElement(`div`);
        const boardGameDiv = document.createElement(`div`);
        const p1 = document.createElement(`p`);
        const p2 = document.createElement(`p`);
        const p3 = document.createElement(`p`);
        const changeBtn = document.createElement(`button`);
        const deleteBtn = document.createElement(`button`);

        boardGameDiv.classList.add(`board-game`);
        contentDiv.classList.add(`content`);
        buttonsDiv.classList.add(`buttons-container`);
        changeBtn.classList.add(`change-btn`);
        deleteBtn.classList.add(`delete-btn`);
        deleteBtn.id = `${e._id}`;
        changeBtn.id = `${e._id}+`;

        p1.textContent = `${e.name}`;
        p2.textContent = `${e.type}`;
        p3.textContent = `${e.players}`;
        changeBtn.textContent = `Change`;
        deleteBtn.textContent = `Delete`;

        contentDiv.appendChild(p1);
        contentDiv.appendChild(p2);
        contentDiv.appendChild(p3);

        buttonsDiv.appendChild(changeBtn);
        buttonsDiv.appendChild(deleteBtn);

        boardGameDiv.appendChild(contentDiv);
        boardGameDiv.appendChild(buttonsDiv);

        gameList.appendChild(boardGameDiv);

        deleteBtn.addEventListener(`click`, async () => {
            const id = e._id;
            const req = await fetch(url + id, { method: "DELETE" });
            onLoad();
        });
        changeBtn.addEventListener(`click`, async () => {

            const name = e.name;
            const type = e.type;
            const players = e.players;

            gameNameInput.value = name;
            gameTypeInput.value = type;
            gamePlayersInput.value = players;

            boardGameDiv.remove();

            addBtn.disabled = true;
            editBtn.disabled = false;

            editBtn.addEventListener(`click`, async () => {

                const values = getInputValues();

                if (!values) {
                    return
                }

                await fetch(url + e._id, {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ name: values[0], type: values[1], players: values[2] })
                });

                addBtn.disabled = false;
                editBtn.disabled = true;

                onLoad();
            })
        });
    }
}

addBtn.addEventListener(`click`, async () => {

    const values = getInputValues();

    if (!values) {
        return;
    }

    await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: values[0], type: values[1], players: values[2] })
    });

    clearInputValues();

    onLoad();
});


function getInputValues() {

    const name = gameNameInput.value;
    const type = gameTypeInput.value;
    const players = gamePlayersInput.value;

    if (!name || !type || !players) {
        return null;
    }

    return [name, type, players]
}

function clearInputValues(params) {
    gameNameInput.value = ``;
    gameTypeInput.value = ``;
    gamePlayersInput.value = ``;
}