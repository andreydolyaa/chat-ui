

import React, { useEffect, useRef, useState } from 'react';
import { socketService } from './../services/socketService';
import { SmileyIcon } from '@primer/octicons-react';
import Picker from 'emoji-picker-react';
import { chatBotService } from '../services/chatBotService';

export default function Chat(props) {
    const userMsgRef = useRef();
    const scrollRef = useRef();
    const [msgList, setMsgList] = useState([]);
    const [msgHistory, setMsgHistory] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    var [showEmojis, setToggleEmojis] = useState(false);
    var [botService, setBotService] = useState(true);
    const [joined, setJoined] = useState(false);


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
            var userJoined = { name: 'System_Message', msg: user.name + ' has joined to the chat', color: '#00000', bgc: '#BEBEBE' };
            socketService.emit('send-msg', userJoined);
        })
    }, [])

    useEffect(() => {
        var interval;
        socketService.on('set-bots', arg => {
            setBotService(arg);
        });
        if (botService) {
            interval = setInterval(() => {
                socketService.emit('send-msg', chatBotService.sendMessage());
            }, chatBotService.getRandomInt(1500, 4000))
        }
        return () => {
            clearInterval(interval)
        }
    }, [botService]);




    function activateBotService() {
        setBotService(botService = !botService);
        socketService.emit('bots-control', botService);
        var botActive = { name: 'System_Message', msg: 'Bot Service Activated', color: '#00000', bgc: '#BEBEBE' };
        var botDeactive = { name: 'System_Message', msg: 'Bot Service Deactivated', color: '#00000', bgc: '#BEBEBE' };

        if (botService) socketService.emit('send-msg', botActive);
        else socketService.emit('send-msg', botDeactive);
    }

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
            <div className="bots">
                <h3>{props.match.params.id} Chat.
                    <label>Bots<input type="checkbox" onChange={activateBotService} checked={botService} /></label>
                </h3>
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
                            <p className="msg-name" style={{ color: msg.color, backgroundColor: msg.bgc ? msg.bgc : null }}>{msg.name}:</p>
                            <p className="msg" style={{ color: msg.admin === true ? msg.color : '#000000', backgroundColor: msg.bgc ? msg.bgc : null }}>{msg.msg}</p>
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
