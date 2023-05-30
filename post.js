export function setupPost(output) {

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    output.innerHTML = `${postId}`;
    
}