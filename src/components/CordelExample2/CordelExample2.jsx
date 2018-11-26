import React, { Component } from 'react';
import './CordelExample2.css';

import gato  from '../../images/ogato.png';
import cordelexample  from '../../images/CordelExample.png';
import botaoavancar  from '../../images/botaoavancar.png';
import botaovoltar  from '../../images/botaovoltar0.png';
import selo  from '../../images/frame.png';

export default class CordelExample2 extends Component {

    render() {
        return (
            <div className = "exemplo">
                <div className = "exampletitle">
                    <div>
                        <h2>Exemplo 2</h2>
                    </div>
                </div>
                <div className = "titulocordel">
                    <h2>O Gato</h2>
                </div>    
                <div className = "gato">
                    <img id ="gato" src= { gato } />
                </div>
                <div className = "button1">
                    <h2 onClick = {() => this.props.history.push('/exemplo')}>Voltar</h2>
                </div>
                <div className = "selo">
                    <img id ="selo" src= { selo } />
                </div>
                <div className = "button2">
                    <h2 onClick = {() => this.props.history.push('/home')}>Iniciar</h2>
                </div>
            </div>
        )
    }
}