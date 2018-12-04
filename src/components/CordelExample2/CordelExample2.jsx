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

                <div className = "BoxCordelExample2">
                    <p>
                        Eles têm charme, carisma<br />
                        São dengosos animais<br />
                        Conquistam logo as pessoas<br />
                        São queridinhos, leais<br />
                        Merecem todo carinho<br />
                        Cuidados especiais.<br />
                        <br />

                        Já sabem qual é o bicho?<br />
                        É o Gato, sim senhor<br />
                        Ele tem corpo macio<br />
                        Felino mais sedutor<br />
                        Os Gatos são engraçados<br />
                        E despertam muito amor.<br />
                        <br />


                        E por que nós os amamos<br />
                        Eles sabem se mostrar<br />
                        Existe uma explicação<br />
                        Que nós podemos notar<br />
                        É o tal “Fator Fofura”<br />
                        Chega pra nos dominar.<br />
                        <br />

                        Eu acho que eles são<br />
                        Os seres mais vaidosos<br />
                        Habitam todo planeta<br />
                        Com estilos graciosos<br />
                        Gatos são extremamente<br />
                        Fascinantes, curiosos.<br />
                        <br />

                        No Brasil, eles são muitos<br />
                        Quase 16 milhões<br />
                        Por serem muito queridos<br />
                        Existem as explicações<br />
                        Crianças, jovens, adultos<br />
                        Entregam seus corações.<br />
                        <br />

                        Link ” CORDEL DOS GATOS”
                        <a href="http://panteracordelaria.blogspot.com/2012/04/cordel-dos-gatos.html"> link do Cordel</a>

                        
                        

                    </p>
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