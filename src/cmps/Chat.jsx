

import React, { useEffect, useRef, useState } from 'react';
import ChatList from '../pages/ChatList';
import { socketService } from './../services/socketService';

export default function Chat(props) {
    const userMsgRef = useRef();
    const [msgList, setMsgList] = useState([]);
    const [msgHistory, setMsgHistory] = useState([]);


    useEffect(() => {
        console.log(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        socketService.setup();
        socketService.emit('join-room', props.match.params.id);
        socketService.on('msg-history', msgHistory => {
            setMsgHistory(prevState => [...prevState, msgHistory]);
        })
        socketService.on('chat-msg', msg => {
            setMsgList(prevState => [...prevState, msg]);
        })
    }, [])

    useEffect(() => {
        userMsgRef.current.value = '';
    }, [msgList])

    function handleChatMsg(event) {
        event.preventDefault();
        const msg = { name: props.location.state.user.name, msg: userMsgRef.current.value };
        socketService.emit('send-msg', msg)
    }


    return (
        <div className="chat-window">
            <div>
                <h3>{props.match.params.id} Chat (USER_ID_{props.location.state.user.id})</h3>
            </div>


            <div className="msg-window">
                {msgList.map((msg, idx) => {
                    return (
                        <div key={idx} className="user-msg">
                            <p>{msg.name}:</p>
                            <p className="msg">{msg.msg}</p>
                        </div>
                    )
                })}
            </div>


            <form onSubmit={handleChatMsg}>
                <input type="text" ref={userMsgRef} placeholder="Say Somthing..." />
                <button>SEND</button>
            </form>


        </div>
    )
}

// {msgHistory.map((msg, idx) => {
//     return (
//         <div key={idx}>
//             <p>{msg.name}</p>
//             <p>{msg.msg}</p>
//         </div>
//     )
// })}