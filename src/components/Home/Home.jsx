import React, { Component } from 'react';
import './Home.css';

import PeopleRight  from '../../images/musicos.gif';
import StarAnimation from '../../images/star-animation.gif';
import Star from '../../images/star.png';
import Dancers from '../../images/dancers.gif';
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
                <img  id = "peopleLeft"  src = { Dancers } alt = ""/>
                <div className = "menu">
                    <div>
                        <h2 onClick = {() => this.props.history.push('/character')}>Iniciar</h2>
                    </div>
                    <div>
                          <h2 onClick = {() => this.props.history.push('/novo')}>Creditos</h2>
                    </div>
                    <div>
                          <h2 onClick = {() => this.props.history.push('/exemplo')}>Exemplo</h2>
                    </div>
                </div>
                <img  id = "peopleRight"  src = { PeopleRight } alt = ""/>
            </div>
        )
    }
}