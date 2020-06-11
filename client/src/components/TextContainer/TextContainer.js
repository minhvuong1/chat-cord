import React from 'react';
import './TextContainer.css';
import { Link } from 'react-router-dom';

const TextContainer = ({ users, room }) => {
    
  return (
    <div className="textContainer">
        <div>
            <h1>Realtime Chat <br/> Application 
                <span role="img" aria-label="emoji"></span>
            </h1>
            <p style={{fontSize: "20px", textAlign: "center"}}>Invite your friends to join room 
                <b style={{color: "red"}}> {room.charAt(0).toUpperCase() + room.slice(1)}</b> !
            </p>
            <h2 style={{textAlign: "center"}}>OR</h2>
            <p style={{fontSize: "20px", textAlign: "center"}}>Join Another Room
                <Link to='/'> <u>Here</u></Link>
            </p>

        </div>  
            <h3>Created with React, Express, Node and Socket.IO<br/>Creator: github.com/minhvuong1</h3>
    </div>
  );
};

export default TextContainer;