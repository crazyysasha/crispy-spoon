export async function setupPost(output) {

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)).json();

    const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)).json();


    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).json();

    console.log(user, post, comments);

    let commentView = '';

    for (let comment of comments) {
        commentView += `
            <li class="p-5 flex flex-col gap-2">
                <div>
                    ${comment.name} - ${comment.email}
                </div>
                <div>
                    ${comment.body}
                </div>
            </li>
        `
        console.log(comment);
    }
    console.log(commentView);
    output.innerHTML = `
        <h1> ${post.title} </h1>
        <p> ${post.body} </p>
        <hr>
        <address> ${user.name} <a href="/user.html?id=${user.id}"> @${user.username} </a> </address>

        <h2> Comments </h2>
        <ul>
            ${commentView}
        </ul>  
        <form class="flex flex-col gap-4" id="storeCommentForm"> 
            <input type="text" name="name" placeholder="Your Name" class="border border-green-500 rounded-lg outline-none focus:shadow focus:shadow-green-400 py-2 px-4" autocomplete="off">   
            <input type="email" name="email" placeholder="Your Email" class="border border-green-500 rounded-lg outline-none focus:shadow focus:shadow-green-400 py-2 px-4" autocomplete="off">   
            <textarea name="body" placeholder="your comment" class="border border-green-500 rounded-lg outline-none focus:shadow focus:shadow-green-400 py-2 px-4"></textarea>
            <button id="storeCommentBtn" disabled class="disabled:bg-slate-400 text-white border border-green-500 bg-green-500 rounded-lg outline-none focus:shadow focus:shadow-green-400 hover:bg-green-400 py-2 px-4">
                create comment
            </button>
        </form>
    `;

    const form = document.querySelector("#storeCommentForm"),
        storeButton = document.querySelector("#storeCommentBtn"),
        name = form.elements["name"],
        email = form.elements["email"],
        body = form.elements["body"];



    form.addEventListener('input', function (event) {
        storeButton.disabled = false;
        if (name.value.length <= 0) {
            storeCommentBtn.disabled = true;
        }
        if (email.value.length <= 0) {
            storeCommentBtn.disabled = true;
        }
        if (body.value.length <= 0) {
            storeCommentBtn.disabled = true;
        }
    });


    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        let response;
        const asdfs = await (response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                body: body,
            }),
        })).json();

        if (response.status != 201) {
            console.error("comment yaratilishda oshibka qaytdi");
        }

        form.reset();
        storeButton.disabled = true;

        console.log(response);
    });

}