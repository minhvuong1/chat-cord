import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer"> 
                <h3><span style={{opacity: '0.8'}}>Room:</span> {room.charAt(0).toUpperCase() + room.slice(1)}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    );
}

export default InfoBar;