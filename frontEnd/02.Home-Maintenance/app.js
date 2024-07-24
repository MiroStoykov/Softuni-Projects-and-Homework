window.addEventListener("load", solve);


function solve() {

    const taskList = document.getElementById(`task-list`);
    const doneList = document.getElementById(`done-list`);
    const placeInput = document.getElementById(`place`);
    const actionInput = document.getElementById(`action`);
    const personInput = document.getElementById(`person`);
    const addBtn = document.getElementById(`add-btn`);
    const li = document.createElement(`li`);
    const buttonsDiv = document.createElement(`div`);
    const editBtn = document.createElement(`button`);
    const doneBtn = document.createElement(`button`);

    li.classList.add(`clean-task`);
    buttonsDiv.classList.add(`buttons`);
    doneBtn.classList.add(`done`);
    editBtn.classList.add(`edit`);

    editBtn.textContent = `Edit`;
    doneBtn.textContent = `Done`;

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(doneBtn);

    let values = [];


    addBtn.addEventListener(`click`, onAddClick);
    editBtn.addEventListener(`click`, onEditClick);
    doneBtn.addEventListener(`click`, onDoneClick);


    function clearForm() {
        placeInput.value = ``;
        actionInput.value = ``;
        personInput.value = ``;
    }

    function onAddClick(event) {
        event.preventDefault();
        values = [placeInput.value, actionInput.value, personInput.value];

        // if (!values.place || !values.action || !values.person) {
        //     return;
        // }

        li.innerHTML = `
        <article>
        <p>Place: ${values[0]}</p>
        <p>Action: ${values[1]}</p>
        <p>Person: ${values[2]}</p>
        </article >
        `;

        li.appendChild(buttonsDiv);

        taskList.appendChild(li);

        clearForm();
    }

    function onEditClick() {

        placeInput.value = values[0];
        actionInput.value = values[1];
        personInput.value = values[2];

        li.remove();
    }

    function onDoneClick() {
        buttonsDiv.remove();
        const buffer = document.createElement(`li`);
        buffer.innerHTML = li.innerHTML;
        li.remove();
        const deleteBtn = document.createElement(`button`);
        deleteBtn.classList.add(`delete`);
        deleteBtn.textContent = `Delete`;
        deleteBtn.addEventListener(`click`, onDeleteClick);
        buffer.appendChild(deleteBtn);
        doneList.appendChild(buffer);

    }

    function onDeleteClick(event) {
        event.target.parentElement.remove();
    }

}