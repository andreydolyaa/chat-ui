

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { storageService } from './../services/storageService';
const STORAGE_KEY = 'chatapp'

export default function Login({ onUserReg }) {
    const userRef = useRef();
    const history = useHistory();


    function registerUser(event) {
        event.preventDefault();
        const user = { name: userRef.current.value, id: uuidv4() };
        storageService.store(STORAGE_KEY, user);
        onUserReg(user);
        history.push('/chat-list');
    }


    return (
        <form onSubmit={registerUser} className="login">
            <label htmlFor="user">Select a Username:
                    <input type="text" required ref={userRef} />
                    <button>CONNECT</button>
            </label>
        </form>
    )
}
