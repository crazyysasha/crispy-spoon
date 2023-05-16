const button = document.getElementById("openModalButton");

// button.onclick = function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log(event.target);
// }
// console.dir(button);

const modalContainer = document.getElementById("modalContainer");

const modalElement = document.getElementById("modalElement");

button.addEventListener("click", function (event) {

    if (!modalContainer.classList.contains("flex")) {
        modalContainer.classList.add("flex");

    }
    modalElement.style.position = "absolute";
    console.dir(event.target);
    modalElement.style.top = event.target.offsetTop + "px";
    modalElement.style.left = event.target.offsetLeft + "px";

    const virtualElement = modalElement.cloneNode(true);

    document.body.append(virtualElement);


    const scaleX = event.target.offsetWidth / virtualElement.offsetWidth;
    const scaleY = event.target.offsetHeight / virtualElement.offsetHeight;
    // console.dir(window.getComputedStyle(virtualElement));
    modalElement.style.transform = `scale(${scaleX}, ${scaleY}) translate(-${virtualElement.offsetWidth / 2}px, -${virtualElement.offsetHeight / 2}px)`;
    virtualElement.remove();


    if (modalContainer.classList.contains("hidden")) {
        modalContainer.classList.remove("hidden");
        setTimeout(function () {
            modalElement.style.transform = "";
            modalElement.style.top = "50%";
            modalElement.style.left = "50%";
            modalElement.style.transform = "translate(-50%, -50%)";
            modalContainer.classList.add("!bg-slate-600/50");
            modalContainer.classList.add("backdrop-blur-sm");

        }, 1);
        // modalContainer.classList.remove("bg-slate-600/10");
        // modalContainer.classList.remove("backdrop-blur-0");
    }


});