window.addEventListener("load", solve);

function solve() {
  const nameField = document.getElementById(`name`);
  const phoneField = document.getElementById(`phone`);
  const categoryField = document.getElementById(`category`);
  const addBtn = document.getElementById(`add-btn`);
  const checkList = document.getElementById(`check-list`);
  const contactsList = document.getElementById(`contact-list`);



  addBtn.addEventListener(`click`, onAdd)

  function onAdd() {
    const values = getInputValues();

    const liElement = document.createElement(`li`);
    const article = document.createElement(`article`);
    const p1 = document.createElement(`p`);
    const p2 = document.createElement(`p`);
    const p3 = document.createElement(`p`);
    const buttons = document.createElement(`div`);
    const editBtn = document.createElement(`button`);
    const saveBtn = document.createElement(`button`);

    buttons.classList.add(`buttons`);
    editBtn.classList.add(`edit-btn`);
    saveBtn.classList.add(`save-btn`);

    buttons.appendChild(editBtn);
    buttons.appendChild(saveBtn);
    buttons.appendChild(saveBtn);

    p1.textContent = `name:${values[0]}`;
    p2.textContent = `phone:${values[1]}`;
    p3.textContent = `category:${values[2]}`;

    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    liElement.appendChild(article);
    liElement.appendChild(buttons);

    checkList.appendChild(liElement);

    clearInputValues();

    editBtn.addEventListener(`click`, () => {

      nameField.value = `${values[0]}`;
      phoneField.value = `${values[1]}`;
      categoryField.value = `${values[2]}`;

      liElement.remove();

    });

    saveBtn.addEventListener(`click`, () => {

      buttons.remove();

      const deleteBtn = document.createElement(`button`);
      deleteBtn.classList.add(`del-btn`);

      liElement.appendChild(deleteBtn);

      contactsList.appendChild(liElement);

      deleteBtn.addEventListener(`click`, () => {
        liElement.remove();
      })

    })
  }

  function getInputValues() {
    const name = nameField.value;
    const phone = phoneField.value;
    const category = categoryField.value;

    return [name, phone, category]
  }

  function clearInputValues(params) {
    nameField.value = ``;
    phoneField.value = ``;
    categoryField.value = ``;
  }
}
