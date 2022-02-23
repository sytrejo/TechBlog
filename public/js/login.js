async function loginFormHandler(event) {
    event.preventDefault();

    //capture the user input and trim the white space
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //compare the login information to database to login
    if (email && password){
        const response = await fetch('/api/users/login',{
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers:{ 'Content-Type': 'application/json' }
        });

        //deal with the response
        if (response.ok){
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);