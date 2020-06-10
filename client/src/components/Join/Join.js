import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join a Room!</h1>
                <div><input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} className="joinInput"/></div>
                <div><input type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)} className="joinInput mt-20"/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Join Room</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;