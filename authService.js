const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const auth_data = await response.json();
        console.log(auth_data.userId);
        sessionStorage.setItem('user_id', auth_data.userId);
        sessionStorage.setItem('user_token', auth_data.token);
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    }
}

const logout = () => {
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('user_token');
}

const register = (username, password) => {
    //TODO <3
}

const performLogin = () => {
    const username_element = document.querySelector('#username');
    const password_element = document.querySelector('#password');

    if (username_element && password_element) {

        const username = username_element.value;
        const password = password_element.value;

        login(username, password)
            .then( _ => {
                alert('Zalogowano!');
            } )
            .catch( e => {
                console.log(e);
                alert('Błąd logowania!');
            })

    }
    else {
        throw new Error('Missing #username or #password elements');
    }

    return false;
}