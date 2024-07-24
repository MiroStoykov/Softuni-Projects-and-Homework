async function lockedProfile() {
    const mainElement = document.getElementById("main");

    const responce = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await responce.json();
    mainElement.innerHTML = '';
    Object.values(data).forEach((user, index) => {
        const newCard =
            `<div class="profile">
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index + 1}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index + 1}Username" value="${user.username}" disabled readonly />
            <div id="user${index + 1}HiddenFields" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${index + 1}Email" value="${user.email}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user${index + 1}Age" value="${user.age}" disabled readonly />
            </div>
            <button onclick="buttonSettings(${index + 1})">Show more</button>
        </div>`;

        mainElement.innerHTML += newCard;
    });
}

function buttonSettings(index) {
    const personality = document.getElementById(`user${index}HiddenFields`);
    const status = document.querySelector(`input[name="user${index}Locked"]:checked`).value;
    const button = personality.parentElement.querySelector('button');


    if (status === 'unlock') {
        if (button.textContent === 'Show more') {

            personality.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            personality.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}
