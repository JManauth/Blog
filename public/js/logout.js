// const logout = async () =>{
//     const response = await fetch('/api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//     });

async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        alert('Succesfully Logged out!');
        document.location.replace('/');
    } else {
        console.log(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);