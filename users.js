export async function setupUsers(output) {
    let users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    output.innerHTML = '';
    for (let user of users) {
        output.innerHTML += `
        <tr class="[&:last-child>td]:border-0">
            <td class="px-5 py-2.5 border-b border-zinc-400">
            ${user.id}
            </td>
            <td class="px-5 py-2.5 border-b border-zinc-400">
            ${user.name}
            </td>
            <td class="px-5 py-2.5 border-b border-zinc-400">
            ${user.username}
            </td>
            <td class="px-5 py-2.5 border-b border-zinc-400">
            ${user.email}
            </td>
            <td class="px-5 py-2.5 border-b border-zinc-400">
            ${user.address}
            </td>
        </tr>
        `;

    }
}