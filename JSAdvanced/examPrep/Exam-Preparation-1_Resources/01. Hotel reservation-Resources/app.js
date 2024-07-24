window.addEventListener('load', solve);

function solve() {


    document.getElementById(`next-btn`).addEventListener(`click`, onClick);

    function onClick(event) {

        event.preventDefault();
        let firstName = document.getElementById(`first-name`);
        let lastName = document.getElementById(`last-name`);
        let dateIn = document.getElementById(`date-in`);
        let dateOut = document.getElementById(`date-out`);
        let peopleCount = document.getElementById(`people-count`);
        let infoList = document.querySelector(`.info-list`);

        infoList.textContent = ``;

        if (firstName.value == `` || lastName.value == `` || peopleCount.value == `` || dateIn.value == `` || dateOut.value == ``) {
            return;
        }

        let dateInAsDate = new Date(dateIn.value);
        let dateOutAsDate = new Date(dateOut.value);

        if (dateInAsDate >= dateOutAsDate) {
            console.log(`FU`);
            return;
        }

        let listItem = document.createElement(`li`);
        let editBtn = document.createElement(`button`);
        let continueBtn = document.createElement(`button`);
        listItem.classList.add(`reservation-content`);
        let article = document.createElement(`article`);
        listItem.appendChild(article);
        let h3 = document.createElement(`h3`);
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        article.appendChild(h3);
        let p1 = document.createElement(`p`);
        article.appendChild(p1);
        p1.textContent = `From date: ${dateIn.value}`;
        let p2 = document.createElement(`p`);
        article.appendChild(p2);
        p2.textContent = `To date: ${dateOut.value}`;
        let p3 = document.createElement(`p`);
        article.appendChild(p3);
        p3.textContent = `For ${peopleCount.value} people`;
        listItem.appendChild(editBtn);
        editBtn.classList.add("edit-btn");
        editBtn.textContent = `Edit`;
        listItem.appendChild(continueBtn);
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = `Continue`;
        infoList.appendChild(listItem);


        let values = [];
        values.push(firstName.value);
        values.push(lastName.value);
        values.push(dateIn.value);
        values.push(dateOut.value);
        values.push(peopleCount.value);

        document.getElementById(`next-btn`).disabled = true;
        firstName.value = ``;
        lastName.value = ``;
        dateIn.value = ``;
        dateOut.value = ``;
        peopleCount.value = ``;

        editBtn.addEventListener("click", onEditClick);

        function onEditClick(event) {

            firstName.value = values[0];
            lastName.value = values[1];
            dateIn.value = values[2];
            dateOut.value = values[3];
            peopleCount.value = values[4];

            document.getElementById(`next-btn`).disabled = false;

            infoList.textContent = ``;
        }

        continueBtn.addEventListener("click", onContinueClick);

        function onContinueClick(event) {

            let confirmList = document.querySelector(`.confirm-list`);
            listItem.removeChild(continueBtn);
            listItem.removeChild(editBtn);

            let confirmBtn = document.createElement(`button`);
            confirmBtn.textContent = `Confirm`;
            confirmBtn.classList.add("confirm-btn");
            let cancelBtn = document.createElement(`button`);
            cancelBtn.textContent = `Cancel`;
            cancelBtn.classList.add("cancel-btn");

            listItem.appendChild(confirmBtn);
            listItem.appendChild(cancelBtn);

            confirmList.appendChild(listItem);

            confirmBtn.addEventListener("click", onConfirmClick);
            cancelBtn.addEventListener("click", onCancelClick);

            function onConfirmClick(event) {
                confirmList.textContent = ``;
                let h1 = document.getElementById(`verification`);
                h1.classList.add("reservation-confirmed");
                h1.textContent = "Confirmed.";
                document.getElementById(`next-btn`).disabled = false;
            }

            function onCancelClick(event) {
                confirmList.textContent = ``;
                document.getElementById(`next-btn`).disabled = false;
                let h1 = document.getElementById(`verification`);
                h1.classList.add("reservation-cancelled");
                h1.textContent = "Cancelled.";
            }
        }
    }
}





