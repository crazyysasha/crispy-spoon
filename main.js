import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, myFunction } from './counter.js'

import {register, welcome} from './welcome';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="increment" type="button">increment</button>
      <button id="decrement" type="button">decrement</button>
      <div id="output"></div>
    </div>
    
    <form id="registerForm">
      <input id="nameInput">
      <button id="registerButton"> saqlash </button>
    </form>

    <div id="welc"></div>

  </div>
`
// TODO: #30 saytda oxirgi marta ${sana} da bo\`lgansiz

setupCounter(increment, decrement, output)

register(registerForm, nameInput, registerButton);

welcome(welc, registerForm);