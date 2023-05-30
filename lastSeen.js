export function setupLastSeen(output) {
    let lastSeen = parseInt(localStorage.getItem('lastSeen'));

    if (lastSeen) {
        let farqi = (Date.now() - lastSeen) / 1000;

        output.innerHTML = `oxirgi marta sahifaga kirilgan vaqt ${farqi} sekund oldin`;
    }


    localStorage.setItem('lastSeen', Date.now());
}