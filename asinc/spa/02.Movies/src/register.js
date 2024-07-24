import { updateNav } from "./app.js";
import { showHome } from "./home.js";
import { setUserData } from "./userHelper.js";
import { register } from "./userService.js";

document.getElementById(`register-form`).addEventListener(`submit`, onRegister)

export function showRegisterView() {
    document.querySelectorAll(`section`).forEach(sec => sec.style.display = `none`);
    document.getElementById(`form-sign-up`).style.display = `block`;
}

async function onRegister(e) {

    e.preventDefault();

    const formdata = new FormData(e.target);

    const email = formdata.get(`email`);
    const password = formdata.get(`password`);
    const repeatPassword = formdata.get(`repeatPassword`);

    if (!email || !password || password.length < 6 || password !== repeatPassword) {
        return alert(`Wrong input!`)
    }
    

    const req = await register({ email: email, password: password });
    setUserData(req);

    updateNav();

    showHome();
}