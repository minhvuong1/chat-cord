import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">ChatCord <i className='far fa-smile' style={{fontSize: '52px'}}></i></h1>
                <h1 className="subHeading">Invite your friends to a Room!</h1>
                <div className="innerContainerInputs">
                    <input type="text" placeholder="Enter your name..." onChange={(event) => setName(event.target.value)} className="joinInput"/>
                    <input type="text" placeholder="Enter a room..." onChange={(event) => setRoom(event.target.value)} className="joinInput mt-20"/>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Join Room</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;