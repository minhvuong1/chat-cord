import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000'

    useEffect((() => {
        // return url then turn into an object
        // deconstruct object
        const { name, room } = queryString.parse(location.search) 

        // Pass endpoint/url to socket to identify the application the data is being sent to
        socket = io(ENDPOINT); 
        
        setName(name)
        setRoom(room)
        
        // calling/emit 'join' while sending data (name & room) to server
        socket.emit('join', { name, room }, () => {
            // any code here gets runned if callback function gets called
        });

        // need a return statement
        return () => {
            // calling/emit disconnect event
            socket.emit('disconnect')

            socket.off();  // turn the instance of the socket off
        }

    }), [ENDPOINT, location.search]) // if any these 2 values change, re-render useEffect

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }


    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}  />
            </div>
            <TextContainer users={messages} room={room} name={name} />
        </div>
    )
}

export default Chat;