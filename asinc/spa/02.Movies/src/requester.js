import { getUserToken } from "./userHelper.js";

async function request(method, url, data) {
    debugger
    const option = {
        method: method
    }

    const headers = {
        "Content-type": "application/json"
    }

    const userToken = getUserToken();

    if (userToken) {
        headers["X-Authorization"] = userToken;
    }

    option["headers"] = headers;

    if (data) {
        option["body"] = JSON.stringify(data);
    }

    const req = await fetch(url, option);

    const responseData = await req.json();
    return responseData;
}

const get = (url,) => {
    return request(`get`, url);
}
const post = (url, data) => {
    return request(`post`, url, data);
}
const update = (url, data) => {
    return request(`put`, url, data);
}
const del = (url) => {
    return request(`delete`, url);
}

export {
    get, post, update, del
}