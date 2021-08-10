const signupFormHandler =  async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const username =  document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && username && password) {
        const response = await fetch('api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ 
                "user_name":username, 
                "email": email, 
                "password": password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok) {
            document.location.replace('/');
            alert('Succesfully signed up!')
        } else {
            alert('Unable to SignUp!')
        }
    }
};

document.querySelector('.signup-card').addEventListener('submit', signupFormHandler);
