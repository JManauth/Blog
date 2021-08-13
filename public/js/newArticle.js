

const postArticle = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();

    if(title && body) {
        const response = await fetch('api/projects', {
            method: 'POST',
            body: JSON.stringify({
                "title": title,
                "body": body,
                "author_id": 1
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok){
            document.location.replace('/')
        } 
    } else if (!title && !body) {
        alert('Please Fill Out All Fields!!!');
    };
};

document.querySelector('#newPost').addEventListener('submit', postArticle)