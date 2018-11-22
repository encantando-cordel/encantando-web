import React from 'react';
import './CordelHistory.css';

import Box from '../../images/frame.png';
import Fish from '../../images/fish.gif';
import SeaWeed from '../../images/seaweed.png';
import ArrowButton from '../../images/arrow-button.png';

export default () => (
    <div className = "main">
        <div className = "history-box">
            <h1> História do Cordel </h1>
            <div className = "frame-container">
                <img src = { Box }  alt = ""/>
                <div className = "arrow-buttons-container"> 
                    <img src = { ArrowButton } alt = ""/>
                    <img id = "inverse-arrow" src = { ArrowButton } alt = ""/>
                </div>
            </div>
            <div className = "fish-container">
                <img src = { Fish } alt = ""/>
                <div className = "SeaWeed">
                    <img  src = { SeaWeed } alt = ""/>
                    <img  src = { SeaWeed } alt = ""/>
                    <img  src = { SeaWeed } alt = ""/>
                </div>
                {/* <button>Voltar</button> */}
            </div>
        </div>
    </div>
)