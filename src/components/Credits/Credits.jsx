import React, { Component } from 'react';
import './Credits.css';

import PeopleRight  from '../../images/peopleRight.png';
import StarAnimation from '../../images/star-animation.gif';
import Star from '../../images/star.png';
import Dancers from '../../images/dancers.gif';
import Music from '../../images/musicos.gif'
import Moon from '../../images/moon-animation.gif';
import Dev from '../../images/dev.png'
import Des from '../../images/design.png'
import Ped from '../../images/pedag.png'
import DesNames from '../../images/design_names.png'
import PedNames from '../../images/ped_names.png'
import TecNames from '../../images/tec_names.png'

export default class Credits extends Component {

    render() {
        return (
            <div className = "main">
                <img id = "moon" src= { Moon } alt = ""/>
                <img id = "star-animation" src= { StarAnimation } alt = ""/>
                <div id = "title" className = "title">
                    <div>
                        <h1>CRÉDITOS</h1>
                    </div>
                </div>
                <div className = "credits">
                  <img  id = "peopleLeft"  src = { Dancers } alt = ""/>
                  <img  id = "peopleRight"  src = { Music } alt = ""/>
                </div>
                <div className = "layer">
                  <img  id = "PedIcon"  src = { Ped } alt = ""/>
                  <img  id = "DesIcon"  src = { Des } alt = ""/>
                  <img  id = "DevIcon"  src = { Dev } alt = ""/>
                  <img  id = "PedNamesImg"  src = { PedNames } alt = ""/>
                  <img  id = "DesNamesImg"  src = { DesNames } alt = ""/>
                  <img  id = "TecNamesImg"  src = { TecNames } alt = ""/>

                </div>
            </div>
        )
    }
}
