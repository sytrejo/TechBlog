async function logout(){
    //make a request from the server
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });

    //deal with a response from the server
    if (response.ok){
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#logout').addEventListener('click', logout);