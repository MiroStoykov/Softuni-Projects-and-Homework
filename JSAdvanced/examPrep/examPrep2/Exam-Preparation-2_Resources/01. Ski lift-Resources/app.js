window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById(`first-name`);
    let lastName = document.getElementById(`last-name`);
    let peopleCount = document.getElementById(`people-count`);
    let fromDate = document.getElementById(`from-date`);
    let daysCount = document.getElementById(`days-count`);
    let nextBtn = document.getElementById(`next-btn`);
    nextBtn.addEventListener(`click`, onClick);
    let infoList = document.querySelector(`.ticket-info-list`);
    let confirmList = document.querySelector(`.confirm-ticket`);
    let confirmBtn = document.createElement(`button`);
    confirmBtn.textContent = `Confirm`;
    confirmBtn.classList.add("confirm-btn");
    let cancelBtn = document.createElement(`button`);
    cancelBtn.textContent = `Cancel`;
    cancelBtn.classList.add("cancel-btn");
    let backBtn = document.createElement(`button`);
    backBtn.id = "back-btn";
    backBtn.textContent = "Back ";
    let body = document.getElementById("body");
    let main = document.getElementById(`main`);
    let h1 = document.createElement(`h1`);
    h1.id = "thank-you";
    h1.textContent = "Thank you, have a nice day! ";
    let snowflakes = document.querySelector(`.snowflakes`);

    function onClick(event) {

        event.preventDefault();

        if (firstName.value == `` || lastName.value == `` || peopleCount.value == `` || fromDate.value == `` || daysCount.value == ``) {
            return;
        }

        let article = document.createElement(`article`);
        let h3 = document.createElement(`h3`);
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        let p1 = document.createElement(`p`);
        p1.textContent = `From date: ${fromDate.value}`;
        let p2 = document.createElement(`p`);
        p2.textContent = `For ${daysCount.value} days`
        let p3 = document.createElement(`p`);
        p3.textContent = `For ${peopleCount.value} people`
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        let editBtn = document.createElement(`button`);
        editBtn.classList.add(`edit-btn`);
        editBtn.textContent = `Edit`;
        let continueBtn = document.createElement(`button`);
        continueBtn.classList.add(`continue-btn`);
        continueBtn.textContent = `Continue`;
        let li = document.createElement(`li`);
        li.classList.add(`ticket`);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        infoList.appendChild(li);

        nextBtn.disabled = true;

        editBtn.addEventListener(`click`, onEditClick);
        continueBtn.addEventListener(`click`, onContinueClick);

        let values = [firstName.value, lastName.value, peopleCount.value, fromDate.value, daysCount.value]

        firstName.value = ``;
        lastName.value = ``;
        peopleCount.value = ``;
        fromDate.value = ``;
        daysCount.value = ``;

        function onEditClick() {
            firstName.value = values[0];
            lastName.value = values[1];
            peopleCount.value = values[2];
            fromDate.value = values[3];
            daysCount.value = values[4];

            infoList.textContent = ``;

            nextBtn.disabled = false;
        }

        function onContinueClick() {
            firstName.value = values[0];
            lastName.value = values[1];
            peopleCount.value = values[2];
            fromDate.value = values[3];
            daysCount.value = values[4];

            li.removeChild(editBtn);
            li.removeChild(continueBtn);

            confirmList.appendChild(li);
            confirmList.appendChild(confirmBtn);
            confirmList.appendChild(cancelBtn);

            firstName.value = ``;
            lastName.value = ``;
            peopleCount.value = ``;
            fromDate.value = ``;
            daysCount.value = ``;
        }

        confirmBtn.addEventListener(`click`, onConfirmClick);
        cancelBtn.addEventListener(`click`, onCancelClick);


        function onConfirmClick() {
            body.textContent = ``;
            body.appendChild(h1);
            body.appendChild(backBtn);
        }

        function onCancelClick() {
            confirmList.textContent = ``;
            nextBtn.disabled = false;
        }

        backBtn.addEventListener(`click`, onBackClick);

        function onBackClick() {
            body.textContent = ``;
            body.appendChild(main);
            body.appendChild(snowflakes);
            confirmList.textContent = ``;
            nextBtn.disabled = false;
        }
    }

}




