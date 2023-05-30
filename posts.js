export function setupPosts(output) {
    const users = [];
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(async posts => {
            for (let post of posts) {
                let user = users.find((u, index) => u.id == post.userId);
                if (!user) {
                    user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)).json();
                    users.push(user);
                    console.log('yuklandi');
                }
                output.innerHTML += `
                <li>
                <article>
                    <h3 class="text-3xl text-sky-600">
                    <a href="./post.html?id=${post.id}">
                        ${post.id}. ${post.title}
                    </a>
                    </h3>
                    <p>${post.body}</p>
                    <address>
                    ${user.name}
                    </address>
                </article>
                </li>
                `;
            }
        })
}