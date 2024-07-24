import { userHelper } from "./utility/userHelper.js";

async function requester(method, url, data) {
    const option = {
        method,
        headers: {}
    };

    //TODO check if user exist and attach x-authorization token to option.header
    const accessToken = userHelper.getUserToken();

    if (accessToken) {
        option.headers[`x-authorization`] = accessToken;
    }

    if (data) {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        }

        return await response.JSON();
        
    } catch (error) {
        alert(error)
    }
}

async function get(url) {
    return requester(`GET`, url);
}

async function post(url, data) {
    return requester(`Post`, url, data);
}

async function put(url, data) {
    return requester(`PUT`, url, data);
}

async function del(url) {
    return requester(`DELETE`, url);
}

export const api = {
    get, post, put, del
}