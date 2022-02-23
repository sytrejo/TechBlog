async function newformHandler(event){
    event.preventDefault();

    //capture users input for new post
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;


    //make a request to the server
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers:{
            'Content-Type' : 'application/json'
        }
    });

    //deal with the server's response
    if (response.ok){
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);