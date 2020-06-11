import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
    let isSentByCurrentUser = false;
    let user = message.user

    const trimmedName = name.trim().toLowerCase();

    if (message.user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return ( 
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">
                        <span style={{paddingRight: '7px', fontSize: '10px', opacity: '0.5'}}>
                            {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                        </span>
                        {user.charAt(0).toUpperCase() + user.slice(1)} 
                    </p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
                </div>
                    <p className="sentText pl-10">
                        <span>{user.charAt(0).toUpperCase() + user.slice(1)}</span>
                        <span style={{paddingLeft: '7px', fontSize: '10px', opacity: '0.6'}}>
                            {
                                new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                            }
                        </span> 
                    </p>
                </div>
            )
    );
}

export default Message