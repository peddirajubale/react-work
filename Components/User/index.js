import React, { useState } from 'react';
import Welcome from '../Welcome';
import './index.css';

function User() {
    const [login, setLogin] = useState(true);

    const renderAuthButton = () => {
        if (login === true) {
            return <button type="button" onClick={() => setLogin(false)}>Logout</button>;
        }
        return <button type="button" onClick={() => setLogin(true)}>Login</button>;
    };

    return (
        <div className="container">
            <Welcome greeting="Hello" name="Raju"/>
            {renderAuthButton()}
        </div>
    );
}

export default User;
