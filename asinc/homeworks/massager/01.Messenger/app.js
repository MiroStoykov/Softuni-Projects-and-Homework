function attachEvents() {

    const url = `http://localhost:3030/jsonstore/messenger`;
    const sendBtn = document.getElementById(`submit`);
    const refreshtBtn = document.getElementById(`refresh`);
    const nameInput = document.querySelector(`input[name="author"]`);
    const messageInput = document.querySelector(`input[name="content"]`);
    const textArea = document.getElementById(`messages`);

    sendBtn.addEventListener(`click`, async () => {
        let name = nameInput.value;
        let message = messageInput.value;
        if (!name || !message) {
            return;
        }
        let obj = {
            author: name,
            content: message
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    });

    refreshtBtn.addEventListener(`click`, async () => {

        const res = await fetch(url, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        const data = await res.json();


        let values = Object.values(data);

        values.forEach(v => {
            console.log(v.value);
        })

    })
};

attachEvents();