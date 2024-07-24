function solve() {

    let task = document.getElementById(`task`);
    let description = document.getElementById(`description`);
    let date = document.getElementById(`date`);

    let addBtn = document.getElementById(`add`);
    addBtn.addEventListener(`click`, onClick);

    let child = document.querySelector(`.orange`);
    let child1 = document.querySelector(`.green`);
    let inProgresSection = document.getElementById(`in-progress`).parentNode;
    let openSection = child.parentNode.parentNode;
    let completeSection = child1.parentNode.parentNode;

    function onClick(e) {
        e.preventDefault();
        if (task.value && description.value && date.value) {
            let article = document.createElement(`article`);
            let h3 = document.createElement(`h3`);
            let p1 = document.createElement(`p`);
            p1.textContent = `Description: ${description.value}`;
            let p2 = document.createElement(`p`);
            p2.textContent = `Due Date: ${date.value}`;
            h3.textContent = `JS Advanced Exam`;
            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);

            openSection.children[1].appendChild(article);
        }
    }

}