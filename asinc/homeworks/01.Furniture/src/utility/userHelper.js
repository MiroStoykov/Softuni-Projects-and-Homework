function setUserData(userData) {
    sessionStorage.setItem(`userData`, JSON.stringify(userData))
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem(`userData`));
}

function clearUserData() {
    sessionStorage.removeItem(`userData`);
}

function getUserToken() {
    const data = getUserData();
    return data.accessToken;
}

function getUserId() {
    const data = getUserData();
    return data._id;
}

function hasOwner(ownerId) {
    const id = getUserId();
    return id === ownerId;
}


export const userHelper = {
    setUserData,
    getUserData,
    clearUserData,
    getUserToken,
    getUserId,
    hasOwner
}