const loginFormHandler = async (event) => {
    event.preventDefault();
    const userName = document.querySelector('#username').value.trim();
    const passWord = document.querySelector('#password').value.trim();
    if ( userName && passWord ) {
        

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                userName, passWord
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok) {
            document.location.replace('/newArticle');
        } else {
            alert('Incorrect user / password');
        }            
    }
};


document.querySelector('.login-card').addEventListener('submit', loginFormHandler);
