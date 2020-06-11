import React from 'react'
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form">
            <input 
                className="input"
                type="text" 
                placeholder="Send a message..."
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            /> 
            <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
        </form>
    );
}

export default Input