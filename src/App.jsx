
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Login from './cmps/Login';
import Navbar from './cmps/Navbar';
import ChatList from './pages/ChatList';
import { storageService } from './services/storageService';
import Chat from './cmps/Chat';
const STORAGE_KEY = 'chatapp';

function App() {
    const [user, setUser] = useState({
        name: '',
        id: null
    });

    useEffect(() => {
        const savedUser = storageService.load(STORAGE_KEY);
        if (savedUser !== null) setUser(savedUser);
    }, [user.name])

    function logout() {
        localStorage.clear();
        setUser({ name: '', id: null });
    }

    return (
        <div className="App">
            <Router>
                <Navbar user={user} logout={logout} />
                <Switch>
                    <Route exact path="/chat/:id" component={Chat} user={user}></Route>
                    {user.name && <Route path="/chat-list" render={props => <ChatList {...props} user={user} />} />}
                    <Route path="/" render={props => <Login {...props} onUserReg={setUser} />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;