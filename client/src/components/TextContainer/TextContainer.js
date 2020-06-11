import React from 'react';
import './TextContainer.css';
import { Link } from 'react-router-dom';

const TextContainer = ({ users, room }) => {
    
  return (
    <div className="textContainer">
        <div>
            <h1>ChatCord <i className='far fa-smile' style={{fontSize: '36px'}}></i></h1>
            <p style={{fontSize: "20px", textAlign: "center"}}>Invite your friends to join room 
                <b style={{color: 'rgb(215, 167, 167)', paddingLeft: '10px'}}> 
                    {room.charAt(0).toUpperCase() + room.slice(1)}
                </b>!
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