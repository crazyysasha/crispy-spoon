let myVar = `hello wiith script`;
console.log(myVar);
let hello = "hello world";
var sd = "asdfghgfd";
//  error 
// button = "ывао  ывопрлылж фвышгкцщк ц4930 счтьбмч";
let num = 5429.545;
let num2 = .5;
let array = ["text 1", "text 2", 5436];
console.log(array);
let object = {
    key1: "text 1",
    key2: "text 2",
    key3: 45643,
};
console.log(object);
const ravshan = {
    name: "Ravshan",
    surname: "Yo`ldoshev",
    age: 14,
};
const samir = {
    name: "Samir",
    surname: "Bahodirov",
    age: 16,
};
const uquvchilarimiz = [
    ravshan,
    samir,
];

console.log(uquvchilarimiz);
// let sum = 0;

// sum = sum + 15;

// sum = sum - 1;
// console.log(sum);

const button = document.querySelector('.login-btn');


const modal = document.getElementById("modal");

button.addEventListener("click", function () {
    // modal.style.display = "block";
    // modal.classList.remove("hidden");
    // modal.classList.add("block");


    modal.classList.toggle("hidden");
    modal.classList.toggle("block");
});


console.dir(modal);
