import './style.css'

const postsOutput = document.querySelector("#postsOutput");

if (postsOutput) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      for (let post of posts) {
        postsOutput.innerHTML += `
        <li>
          <article>
            <h3 class="text-3xl text-sky-600">
              <a href="./post.html?id=${post.id}">
                ${post.id}. ${post.title}
              </a>
            </h3>
            <p>${post.body}</p>
            <address>
              Leanne Graham
            </address>
          </article>
        </li>
        `;
      }
    })
}