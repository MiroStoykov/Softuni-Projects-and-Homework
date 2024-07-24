window.addEventListener("load", solve);

function solve() {
  let name = document.getElementById(`snowman-name`);
  let height = document.getElementById(`snowman-height`);
  let location = document.getElementById(`location`);
  let creator = document.getElementById(`creator-name`);
  let attribute = document.getElementById(`special-attribute`);
  let main = document.getElementById(`hero`);
  let body = document.querySelector(`.body`);
  let img = document.getElementById("back-img");



  let addBtn = document.querySelector(`.add-btn`);
  addBtn.addEventListener(`click`, onclick);

  let article = document.createElement(`article`);

  let sendBtn = document.createElement(`button`);
  sendBtn.classList.add(`send-btn`);
  sendBtn.textContent = `Send`;

  let preview = document.querySelector(`.snowman-preview`);

  let li = document.createElement(`li`);
  li.classList.add("snowman-info");

  let snowList = document.querySelector(`.snow-list`);

  function onclick(event) {

    event.preventDefault();

    if (name.value == `` || attribute.value == `` || height.value == `` || location.value == `` || creator.value == ``) {
      return;
    }
    article.innerHTML += `<p>Name: ${name.value}</p>`;
    article.innerHTML += `<p>Height: ${height.value}</p>`;
    article.innerHTML += `<p>Location: ${location.value}</p>`;
    article.innerHTML += `<p>Creator: ${creator.value}</p>`;
    article.innerHTML += `<p>Attribute: ${attribute.value}</p>`;

    li.appendChild(article);

    let div = document.createElement(`div`);
    div.classList.add("btn-container");
    div.innerHTML += `<button class="edit-btn">Edit</button>`;
    div.innerHTML += `<button class="next-btn">Next</button>`;

    li.appendChild(div);

    preview.appendChild(li);

    let values = [name.value, height.value, location.value, creator.value, attribute.value]

    name.value = ``;
    height.value = ``;
    location.value = ``;
    creator.value = ``;
    attribute.value = ``;

    addBtn.disabled = true;

    let nextBtn = document.querySelector(`.next-btn`);
    nextBtn.addEventListener(`click`, onNextClick);

    let editBtn = document.querySelector(`.edit-btn`);
    editBtn.addEventListener(`click`, onEditClick)

    function onNextClick() {
      li.removeChild(div);
      article.appendChild(sendBtn);
      let li1 = document.createElement(`li`);
      li1.classList.add(`snowman-content`);
      li1.appendChild(article);
      snowList.appendChild(li1);
      preview.textContent = ``;
    }

    function onEditClick() {

      name.value = values[0];
      height.value = values[1];
      location.value = values[2];
      creator.value = values[3];
      attribute.value = values[4];

      addBtn.disabled = false;

      article.textContent = ``;
      li.textContent = ``;
      snowList.textContent = ``;
      preview.textContent = ``;
    }

    sendBtn.addEventListener(`click`, onSendClick);
    let backBtn = document.createElement(`button`);
    backBtn.classList.add(`back-btn`);
    backBtn.textContent = `Back`;
    backBtn.addEventListener(`click`, onBackClick);

    function onSendClick() {
      body.removeChild(main);
      img.hidden = false;
      body.appendChild(backBtn);
    }

    function onBackClick() {
      img.hidden = true;
      snowList.textContent = ``;
      body.removeChild(backBtn);
      body.appendChild(main);
      addBtn.disabled = false;
      article.textContent = ``;
    }
  }
}
