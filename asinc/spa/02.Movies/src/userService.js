import { get, post, update, del } from "./requester.js";

const endPoints = {
    login: "http://localhost:3030/users/login",
    register: "http://localhost:3030/users/register",
    logout: `http://localhost:3030/users/logout`,
}

async function register(data) {
    return post(endPoints.register, data);
}

async function logout() {
    return await get(endPoints.logout);
}

async function login(data) {
    return await post(endPoints.login, data)
}

export {
    register,
    login,
    logout
}