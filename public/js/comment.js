const { CHAR_ZERO_WIDTH_NOBREAK_SPACE } = require("picomatch/lib/constants");

async function commentFormHandler(event) {
    event.preventDefault();

    //capture user input into a variable
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //make a request of the server
    if (comment_text){
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        //deal with the server's response
        if (response.ok){
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('./comment-form').addEventListener('submit', commentFormHandler);