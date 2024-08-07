import { updateNav } from "./app.js";
import { showHome } from "./home.js";
import { setUserData } from "./userHelper.js";
import { login } from "./userService.js";


document.getElementById(`form-login`).addEventListener(`submit`, onLogin);

export function showLogin() {

    document.querySelectorAll(`section`).forEach(sec => sec.style.display = `none`);
    document.getElementById(`form-login`).style.display = `block`;
}

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get(`email`);
    const password = formData.get(`password`);

    if (!email || !password) {
        return
    }

    const userData = login({ email, password });

    setUserData(userData);

    updateNav();

    showHome();

}