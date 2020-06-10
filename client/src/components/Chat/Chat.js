import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = 'localhost:5000'

    useEffect((() => {
        // return url then turn into an object
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

    return (
        <h1>Chat</h1>
    )
}

export default Chat;