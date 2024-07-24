function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const sendBtn = document.getElementById(`submit`).addEventListener(`click`, onClickSend);
    const refreshBtn = document.getElementById(`refresh`).addEventListener(`click`, onClickGet);
    const messages = document.getElementById(`messages`);
    const nameField = document.querySelector(`input[name=author]`);
    const contentField = document.querySelector(`input[name=content]`);

    async function onClickSend() {

        if (!nameField.value) {
            return
        }

        const obj = {
            author: nameField.value,
            content: contentField.value
        };

        const req = await fetch(url, {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });

        const data = await req.json();

        nameField.value = ``;
        contentField.value = ``;
    }

    async function onClickGet() {
        messages.value = ``;

        const req = await fetch(url);

        const data = Object.entries(await req.json());

        for (const i of data) {
            messages.value += `${i[1].author}: ${i[1].content}\n`;
        }
        messages.value = messages.value.trim();
    }
}

attachEvents();