import React, { Component } from 'react';
import './Home.css';

import PersonsRight  from '../../images/personsRight.png';
import PersonsLeft from '../../images/personsLeft.png';
import Star from '../../images/star.png';
import CreditsButton from '../../images/credits-button.png';
import Moon from '../../images/moon.png';
import InitButton from '../../images/init-button.png';

export default class Home extends Component {

    render() {
        return (
            <div className = "main">
                <div className = "persons">
                    <img src= { PersonsLeft } alt=""/>
                    <div className = "menu">
                        <div>
                            <img className = "init-button" src= { InitButton } alt=""/>
                        </div>
                        <div>
                            <img className = "credits-button"  src= { CreditsButton } alt=""/>
                        </div>
                    </div>
                    <img src= { PersonsRight } alt=""/>      
                </div>  
                <div className = "title">
                    <div>
                        <img src= { Moon } alt=""/>
                    </div>
                    <h2>ENCANTANDO CORDEL</h2>
                    <div>
                        <img src= { Star } alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}