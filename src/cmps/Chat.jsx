

import React, { useEffect, useRef, useState } from 'react';
import { socketService } from './../services/socketService';
import { SmileyIcon } from '@primer/octicons-react';
import Picker from 'emoji-picker-react';
import { chatBotService } from '../services/chatBotService';

export default function Chat(props) {
    const userMsgRef = useRef();
    const scrollRef = useRef();
    const emojiRef = useRef();
    const [msgList, setMsgList] = useState([]);
    const [msgHistory, setMsgHistory] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    var [showEmojis, setToggleEmojis] = useState(false);
    const [joined, setJoined] = useState(false);
    const [userJoined, setUserJoined] = useState({});


    useEffect(() => {
        console.log(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        socketService.setup();
        socketService.emit('join-room', props.match.params.id);
        socketService.on('msg-history', msgHistory => {
            msgHistory.filter(msg => {
                if (msg.roomId === props.match.params.id) {
                    setMsgHistory(msgs => [...msgs, msg]);
                    scrollDownOnMsg();
                }
            })
        })
        socketService.on('chat-msg', msg => {
            setMsgList(prevState => [...prevState, msg]);
            scrollDownOnMsg();
        })
    }, [])

    useEffect(() => {
        socketService.emit('is-joined', props.location.state.user);
        socketService.on('user-joined', user => {
            setJoined(true);
            setUserJoined(user);
            var interval;
            interval = setInterval(() => {
                setJoined(false);
                clearInterval(interval);
            }, 5000)
        })
    }, [])

    useEffect(() => {
        var interval;
        interval = setInterval(() => {
            socketService.emit('send-msg', chatBotService.sendMessage());
        }, chatBotService.getRandomInt(1500, 4000))
        return () => {
            clearInterval(interval)
        }
    }, []);

    function handleChatMsg(event) {
        event.preventDefault();
        const msg = {
            name: props.location.state.user.name,
            msg: userMsgRef.current.value,
            color: props.location.state.user.color,
            roomId: props.match.params.id
        };
        socketService.emit('send-msg', msg);
        userMsgRef.current.value = '';
        setToggleEmojis(false);
    }


    function scrollDownOnMsg() {
        var interval;
        interval = setInterval(() => {
            if (!scrollRef.current) return
            else scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            clearInterval(interval);
        }, 500);
    }


    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        userMsgRef.current.value += emojiObject.emoji;
    };

    function toggleEmojis() {
        setToggleEmojis(showEmojis = !showEmojis);
        scrollDownOnMsg();
    }


    return (
        <div className="chat-window" ref={scrollRef}>
            <div>
                <h3>{props.match.params.id} Chat. {joined && <p className="joined">{userJoined.name} is joined to the chat room!</p>}</h3>
            </div>


            <div className="msg-window">
                {msgHistory.map((msg, idx) => {
                    return (
                        <div key={idx} className="user-msg">
                            {msg.name && <p className="msg-name" style={{ color: msg.color }}>{msg.name}:</p>}
                            {msg.msg && <p style={{ color: msg.admin ? msg.color : null }} className="msg">{msg.msg}</p>}
                        </div>
                    )
                })}
                {msgList.map((msg, idx) => {
                    return (
                        <div key={idx} className="user-msg">
                            <p className="msg-name" style={{ color: msg.color }}>{msg.name}:</p>
                            <p className="msg" style={{ color: msg.admin === true ? msg.color : '#000000' }}>{msg.msg}</p>
                        </div>
                    )
                })}
            </div>


            <form onSubmit={handleChatMsg}>
                <div className="mobile-input">
                    <div onClick={toggleEmojis} className="smiley"><SmileyIcon size={24} /></div>
                    <input type="text" ref={userMsgRef} placeholder="Say Somthing..." />
                </div>
                <button>SEND</button>
            </form>

            {showEmojis &&
                <div className="emojis">
                    <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
                </div>}



        </div>
    )
}
