async function attachEvents() {
    const load = document.getElementById(`btnLoadPosts`).addEventListener(`click`, onClickLoad);
    const view = document.getElementById(`btnViewPost`).addEventListener(`click`, onClickView);
    const select = document.getElementById(`posts`);
    const title = document.getElementById(`post-title`);
    const body = document.getElementById(`post-body`);
    const postComments = document.getElementById(`post-comments`);

    const postUrl = `http://localhost:3030/jsonstore/blog/posts`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    const postResponse = await fetch(postUrl);
    const posts = Object.entries(await postResponse.json());


    function onClickLoad() {
        title.textContent = `Post Details`;
        body.textContent = ``;
        select.textContent = ``;
        postComments.textContent = ``;
        for (const post of posts) {
            const option = document.createElement(`option`);
            option.textContent = post[1].title;
            option.value = post[1].id;
            select.appendChild(option);
        }
    }

    async function onClickView() {
        postComments.innerHTML = ``;
        body.textContent = ``;
        const commentsResponse = await fetch(commentsUrl);
        const comments = Object.entries(await commentsResponse.json());
        const postID = onChange(select);

        const post = posts.find(e => e[0] == postID);

        title.textContent = post[1].title;

        body.textContent = post[1].body;

        for (const comment of comments) {
            if (comment[1].postId == post[0]) {
                const li = document.createElement(`li`);
                li.id = comment[1].id;
                li.textContent = comment[1].text;
                postComments.appendChild(li);
            }
        }
    }

    function onChange(e) {
        var strUser = e.options[e.selectedIndex].value;
        return strUser;
    }
}

attachEvents();