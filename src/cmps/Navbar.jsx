

import React, { useEffect } from 'react';
import { SignOutIcon } from '@primer/octicons-react';
import { Link, useHistory } from 'react-router-dom';


export default function Navbar({ user, logout }) {

    const history = useHistory();

    useEffect(() => {
        console.log(history);
    }, [])

    function logoutUser() {
        logout();
        history.push('/')
    }

    return (
        <div className="navbar">
            <h1>tekchat</h1>
            <Link to="/chat-list">Chat Rooms</Link>
            {user.name &&
                <div className="navbar-user">
                    <p>Hello, {user.name}!</p>
                    <button onClick={logoutUser}>Logout <SignOutIcon size={16} /></button>
                </div>
            }
        </div>
    )
}
