function setUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify(userData));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem(`userData`));
}

function getUserToken() {
    const data = getUserData();
    return data?.accessToken;
}

function clearUserData() {
    sessionStorage.removeItem(`userData`);
}

function getUserId() {
    const data = getUserData();
    return data?._id;
}

export {
    setUserData,
    getUserData,
    getUserId,
    getUserToken,
    clearUserData
}