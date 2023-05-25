import './style.css'
import { setupUsers } from './users'


let usersOutput = document.querySelector("#usersList");

if (usersOutput) {
  setupUsers(usersOutput);
}