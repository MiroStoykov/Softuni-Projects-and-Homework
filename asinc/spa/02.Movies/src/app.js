import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showlogout } from "./logout.js";
import { showRegisterView } from "./register.js";
import { getUserData } from "./userHelper.js";

document.querySelectorAll(`section`).forEach(sec => sec.style.display = `none`);
document.querySelector(`.navbar`).addEventListener(`click`, onNavigate);

const userNav = document.querySelectorAll(`li.user`);
const guestNav = document.querySelectorAll(`li.guest`);
const userMSG = document.getElementById(`welcome-msg`);

updateNav();

const routes = {
    "/register": showRegisterView,
    "/home": showHome,
    "/logout": showlogout,
    "/login": showLogin
}

export function updateNav() {
    const userData = getUserData();
    if (userData) {
        userNav.forEach(x => x.style.display = `block`);
        guestNav.forEach(x => x.style.display = `none`);
        userMSG.textContent = `Welcome, ${userData.email}`;
    } else {
        userNav.forEach(x => x.style.display = `none`);
        guestNav.forEach(x => x.style.display = `block`);
        userMSG.textContent = ``;
    }
}

function onNavigate(e) {
    if (e.target.tagName !== `A` || !e.target.href) {
        return;
    }
    e.preventDefault();
    const url = new URL(e.target.href);
    const path = url.pathname;
    routes[path]();
}