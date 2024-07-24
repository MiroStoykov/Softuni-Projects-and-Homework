import page from "../node_modules/page/page.mjs";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import { showDashboardView } from "./views/dashboardView.js";

const root = document.querySelector("div[data-id='root']");

const userNav = document.getElementById(`user`);
const guestNav = document.getElementById(`guest`);

page(updateCTX);
page("/", showDashboardView);
page("/dashboard", showDashboardView);
page("/create", () => { });
page("/details/:id", () => { });
page("/edit/:id", () => { });
page("/login", () => { });
page("/logout", () => { });
page("/myFurniture", () => { });
page("/register", () => { });

page.start();

function renderer(template) {
    render(template, root);
}

function updateCTX(ctx, next) {
    ctx.render = renderer;
    next();
}