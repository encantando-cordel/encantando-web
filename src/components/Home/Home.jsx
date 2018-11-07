import React, { Component } from 'react';
import './Home.css';

import PersonsRight  from '../../images/personsRight.png';
import StarAnimation from '../../images/star-animation.gif';
import Star from '../../images/star.png';
import Dancers from '../../images/dancarinos.gif';
import Moon from '../../images/moon-animation.gif';

export default class Home extends Component {

    render() {
        return (
            <div className = "main">
                <img id = "moon" src= { Moon } alt = ""/>
                <img id = "star-animation" src= { StarAnimation } alt = ""/>
                <img id = "star" src= { Star } alt = ""/>
                <img id = "last-star" src= { Star } alt = ""/>
                <div className = "title">
                    <div>
                        <h1>ENCANTANDO</h1>
                    </div>
                    <div>
                        <h1>CORDEL</h1>
                    </div>
                </div>
                <img  id = "personsLeft"  src = { Dancers } alt = ""/>
                <div className = "menu">
                    <div>
                        <h2>Iniciar</h2>
                    </div>
                    <div>
                        <h2>Créditos</h2>
                    </div>
                </div>
                <img  id = "personsRight"  src = { PersonsRight } alt = ""/>
            </div>
        )
    }
}