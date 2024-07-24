document.querySelector(`form`).addEventListener(`submit`, onSubmit);
const urlLogin = `http://localhost:3030/users/login`;

async function onSubmit(e) {
    e.preventDefault();

    try {
        const formData = new FormData(e.target);

        const email = formData.get(`email`);
        const password = formData.get(`password`);

        const obj = { email: email, password: password };

        const req = await fetch(urlLogin, {
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