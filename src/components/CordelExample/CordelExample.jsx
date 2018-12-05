import React, { Component } from 'react';
import './CordelExample.css';

import cachorro  from '../../images/cachorro.png';
import botaoavancar  from '../../images/botaoavancar.png';
import botaovoltar  from '../../images/botaovoltar0.png';
import selo  from '../../images/frame.png';


export default class CordelExample extends Component {

    render() {
        return (
            <div className = "exemplo">
                <div className = "exampletitle">
                    <div>
                        <h2>Exemplo</h2>
                    </div>
                </div>

                <div className = "BoxCordelExample">
                    <p>    
                        O meu informante disse-me <br />
                        Que o caso tinha se dado <br />
                        E eu julguei que isso fosse <br />
                        Um cachorro desgraçado, <br />
                        Ele lembrou de mim? <br />
                        Não o faço desprezado. <br />
                        <br />

                        O vigário entregou-lhe <br /> 
                        Os dois contos de réis <br />
                        O bispo disse é melhor <br />
                        Do que diversos fiéis <br />
                        E disse: – Provera Deus <br />
                        Que assim lá morresse uns dez. <br />
                        <br />
                    </p>
                </div>

                <div className = "titulocordel">
                    <h2>O Cachorro</h2>
                </div>    
                <div className = "cachorro">
                    <img id ="cachorro" src= { cachorro } />
                </div>
                <div className = "selo">
                    <img id ="selo" src= { selo } />
                </div>
                <div className = "button1">
                    <h2 onClick = {() => this.props.history.push('/home')}>Iniciar</h2>
                </div>

                <div className = "button2">
                    <h2 onClick = {() => this.props.history.push('/exemplo2')}>Avancar</h2>
                </div>
            </div>
        )
    }
}