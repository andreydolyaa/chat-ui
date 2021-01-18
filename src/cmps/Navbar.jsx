

import React, { useEffect, useState } from 'react';
import { SignOutIcon, CommentDiscussionIcon, SignInIcon } from '@primer/octicons-react';
import { Link, useHistory } from 'react-router-dom';
import { socketService } from './../services/socketService';
import { chatBotService } from '../services/chatBotService';



export default function Navbar({ user, logout }) {
    var [isOpen, setOpen] = useState(false);
    const history = useHistory();

    useEffect(() => {
        console.log(history);
    }, [])

    function logoutUser() {
        logout();
        closeMenu();
        history.push('/')
    }

    function toggleMenu() {
        setOpen(isOpen = !isOpen);
        console.log(isOpen);
    }

    function closeMenu() {
        setOpen(false);
    }


    return (
        <div>
            <div className="navbar" style={{ borderBottom: !user.name ? '1px solid #ABEBC6' : ''}}>
                <div className="navbar-logo">
                    <h1>tek<span>chat</span></h1>
                </div>
                {user.name &&
                    <div className="navbar-user">
                        <p>Hello, <span style={{ color: user.color }}>{user.name}!</span></p>
                        <p>|</p>
                        <Link to="/chat-list">Chat Rooms <CommentDiscussionIcon size={16} className="icon" /></Link>
                        <p>|</p>
                        <p className="logout" onClick={logoutUser}>Logout <SignOutIcon size={16} className="icon" /></p>
                    </div>
                }
            </div>

            <div className="mobile-navbar">
                <h1>tek<span>chat</span></h1>
                <button type="button" onClick={toggleMenu} className={isOpen ? 'hamburger hamburger--collapse-r is-active' : 'hamburger hamburger--collapse-r'}>
                    <span class="hamburger-box h-menu">
                        <span class="hamburger-inner h-menu"></span>
                    </span>
                </button>
            </div>

            <div className={isOpen ? "mobile-items" : "mobile-items-close"}>
                {user.name && isOpen &&
                    <div className="mobile-items-inside">
                        <Link to="/chat-list" onClick={closeMenu}>Chat Rooms <CommentDiscussionIcon size={16} className="icon" /></Link>
                        <p className="logout2" onClick={logoutUser}>Logout <SignOutIcon size={16} className="icon" /></p>
                    </div>

                }
                {!user.name &&
                    <Link className="login-mobile" to="/">Hi, Please Login first.</Link>
                }
            </div>
        </div>
    )
}
