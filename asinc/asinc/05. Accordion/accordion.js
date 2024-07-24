async function solution() {
    const main = document.getElementById(`main`);
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`;

    const response = await fetch(url);
    const data = await response.json();

    data.forEach(async (el) => {
        const result = await fetch(detailsUrl + el._id);
        const dataResult = await result.json();
        main.innerHTML += ` <div class="accordion">
            <div class="head">
                <span>${el.title}</span>
                <button class="button" id="${el._id}" >More</button>
            </div>
            <div class="extra">
                <p>${dataResult.content}</p>
            </div>
        </div>`;
        document.querySelectorAll('button').forEach(x => x.addEventListener('click', onClick));
    });
    
    function onClick(event) {
        const accordion = event.target.parentNode.parentNode;
        const extra = accordion.children[1];
        if (event.target.textContent == `More`) {
            extra.style.display = `block`;
            event.target.textContent = `Less`;
        } else {
            extra.style.display = `none`;
            event.target.textContent = `More`;
        }
    }
    
}


