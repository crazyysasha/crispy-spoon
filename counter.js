export function setupCounter(inc, dec, output) {
  let counter = parseInt(localStorage.getItem("count"));
  const setCounter = (count) => {
    localStorage.setItem("count", count);
    counter = count
    output.innerHTML = `count is ${counter}`
  }
  inc.addEventListener('mousemove', () => setCounter(counter + 1))
  dec.addEventListener('mousemove', () => setCounter(counter - 1))
  setCounter(counter)
}


export function myFunction() {
  console.log("hello");
}