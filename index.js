// write a function, submitData, that takes two strings as arguments, one representing a user's name and the other representing a user's email.
function submitData(nameValue, emailValue) {
    const body = document.body;
    const data = {
        name: `${nameValue}`,
        email: `${emailValue}`
    }

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/users', config)
    .then(response => response.json())
    .then(json => {
        //console.log(json);
        const iDTag = document.createElement('p');
        iDTag.innerHTML = json.id;
        body.appendChild(iDTag);
        //debugger;

    })
    .catch(error => {
        const errorTag = document.createElement('p');
        errorTag.innerHTML = error.message;
        body.appendChild(errorTag);

    });
}

//submitData('Steve', 'steve@steve.com');