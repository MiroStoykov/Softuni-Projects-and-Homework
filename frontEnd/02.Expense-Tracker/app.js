window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById("add-btn");
    const expense = document.getElementById("expense");
    const amount = document.getElementById("amount");
    const date = document.getElementById("date");
    const previewList = document.getElementById("preview-list");
    const deleteBtn = document.querySelector(`.delete`);
    const expensesList = document.getElementById(`expenses-list`);
    addBtn.addEventListener(`click`, anAdd);

    function anAdd() {
        if (!expense.value || !amount.value || !date.value) {
            return;
        }

        const li = document.createElement(`li`);
        const editBtn = document.createElement(`button`);
        const okBtn = document.createElement(`button`);
        const divButtons = document.createElement(`div`);


        editBtn.textContent = `edit`;
        okBtn.textContent = `ok`;
        li.classList.add(`expense-item`)
        divButtons.classList.add(`buttons`);
        editBtn.classList.add(`btn`, `edit`);
        okBtn.classList.add(`btn`, `ок`);

        editBtn.addEventListener(`click`, onEdit);
        okBtn.addEventListener(`click`, onOk);
        deleteBtn.addEventListener(`click`, onDelete);
        divButtons.appendChild(editBtn);
        divButtons.appendChild(okBtn);

        let data = [];

        data.push(expense.value)
        data.push(amount.value)
        data.push(date.value)

        li.innerHTML = `
        <article>
        <p>Type: ${data[0]}</p>
        <p>Amount: ${data[1]}$</p>
        <p>Date: ${data[2]}</p>
        </article>
        `;

        li.appendChild(divButtons);

        previewList.appendChild(li);

        expense.value = ``;
        amount.value = ``;
        date.value = ``;

        addBtn.disabled = true;

        function onEdit() {
            expense.value = data[0];
            amount.value = data[1];
            date.value = data[2];

            addBtn.disabled = false;

            li.remove();

            data = [];
        }

        function onOk() {
            li.removeChild(divButtons);

            expensesList.appendChild(li);
            data = [];
            addBtn.disabled = false;
            previewList.innerHTML = ``;
        }

        function onDelete() {
            li.remove();
            expensesList.innerHTML = ``;
            addBtn.disabled = false;
            data = [];
        }
    }
}