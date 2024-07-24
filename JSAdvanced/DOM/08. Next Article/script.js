function getArticleGenerator(articles) {

    let input = articles;

    return function () {
        let div = document.getElementById(`content`);
        let article = document.createElement(`article`);
        let current = input.shift();
        if (current) {
            article.textContent = current;
            div.appendChild(article);
        }
    }
}
