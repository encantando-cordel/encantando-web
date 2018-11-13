import React, { Component } from 'react';
import './Credits.css';

import PeopleRight  from '../../images/peopleRight.png';
import StarAnimation from '../../images/star-animation.gif';
import Star from '../../images/star.png';
import Dancers from '../../images/dancers.gif';
import Moon from '../../images/moon-animation.gif';

export default class Credits extends Component {

    render() {
        return (
            <div className = "main">
                <img id = "moon" src= { Moon } alt = ""/>
                <img id = "star-animation" src= { StarAnimation } alt = ""/>
                <div id="title" className = "title">
                    <div>
                        <h1>CRÉDITOS</h1>
                    </div>
                </div>
                <div className = "credits">
                  <img  id = "peopleLeft"  src = { Dancers } alt = ""/>

                </div>
            </div>
        )
    }
}
