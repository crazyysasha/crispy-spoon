//localstorageda yozilgan ismni saqlasin 
export function register(form, input, button) {
    const registerHandler = (event) => {
        event.preventDefault();
        console.log(input.value);
        localStorage.setItem('name', input.value);
        welcome();
    }
    button.addEventListener('click', registerHandler);
}

// welcome ${name} textini chiqarib bersin

let outputElement;
let formElement;

export function welcome(output, form) {
    if (output !== undefined) {
        outputElement = output;
    }
    if (form !== undefined) {
        formElement = form;
    }

    const name = localStorage.getItem('name');
    if (name) {
        formElement.remove();
        outputElement.innerHTML = `welcome ${name}`;
    }
}