export function setupUsers() {

    let isLoad = false;

    loadUsers.addEventListener('click', async () => {
        isLoad = !isLoad;
        if (isLoad == false) {
            result.innerHTML = '';
            return;
        }

        let loadedUsers = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

        console.log(loadedUsers);

        loadedUsers.forEach((user) => {
            result.innerHTML += `
    <li class="text-green-500">
      ${user.id}. ${user.name}
    </li>  
  `
        });
    });
    // TODO: #31 Paginatsiya qilish
}