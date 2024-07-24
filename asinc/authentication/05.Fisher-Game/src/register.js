const form = document.querySelector(`form`).addEventListener(`submit`, onSubmit);


async function onSubmit(e) {
    try {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get(`email`);
        const password = formData.get(`password`);
        const rePass = formData.get(`rePass`);
        const urlRegister = `http://localhost:3030/users/register`;

        if (password != rePass) {
            throw new Error(`Incorect password, please try again.`)
        }

        const obj = {
            email: email,
            password: password
        }

        const req = await fetch(urlRegister, {
            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });

        const data = await req.json();

        if (req.status != 200) {
            throw new Error(data.message)
        } else {
            sessionStorage.setItem(`userData`, JSON.stringify(data));
            e.target.reset();
            window.location.href = `./index.html`;
        }

    } catch (error) {
        alert(error);
    }

}