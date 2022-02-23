async function signupFormHandler(event){
    event.preventDefault();

    //Capture the user input into variables and trim the white space
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();

    if (username && email && password){
        //make a request of the server
        const response = await fetch('/api/users', {
            method:'POST',
            body: JSON.stringify({
                username,
                email,
                twitter,
                github,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        // deal with the servers response
        if (response.ok){
            console.log('Successful Registration');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);