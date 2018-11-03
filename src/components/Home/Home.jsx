import React, { Component } from 'react';
import './Home.css';

import PersonsRight  from '../../images/imagem1.png';
import PersonsLeft from '../../images/imagem2.png';

export default class Home extends Component {

    render() {
        return (
            <div className = "container-fluid main">
                <div className = 'persons-left'>
                    <img src= { PersonsLeft } alt=""/>
                </div>
                <div className = 'persons-right'>
                    <img src= { PersonsRight } alt=""/>
                </div>
            </div>
        )
    }

}