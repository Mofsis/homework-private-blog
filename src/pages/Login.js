import React from 'react';
import {useHistory} from 'react-router-dom';

const Login = ({toggleAuth}) => {
    const history = useHistory();

    function handleClick() {
        toggleAuth(true)
        history.push("/");
    }
    return (
        <div>
            <h2>Login pagina</h2>
            <p>Druk op de knop om in te loggen</p>
            <button type="button" onClick={handleClick}>Inloggen</button>
        </div>
    );
};

export default Login;