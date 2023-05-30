import { setupPost } from './post';
import { setupPosts } from './posts';
import './style.css'

const postsOutput = document.querySelector("#postsOutput");

const postOutput = document.querySelector('#post');

if (postsOutput) {
  setupPosts(postsOutput);
}


if (postOutput) {
  setupPost(postOutput);
}