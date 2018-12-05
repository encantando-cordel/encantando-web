import React, {Component} from 'react';
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
                <div className="hAux">
                    <div className="hBox">
                        <p>Na época dos povos conquistadores,
                        o cordel já existia. Gregos, fenícios,
                        romanos (ave Maria!)...<br />
                        Chegou a Portugal no século XVI e de
                        folhas soltas o nome recebeu. Algo muito
                        inusitado é que, por lá, era vendido
                        pendurado. Dos cordões veio o cordel,
                        olha só esse papel. Chegou aqui com Pedro
                        Álvares Cabral, e, no Brasil, se tornou 
                        atemporal. <br />
                        Nos balaios do povo colonizador, instalou-se
                        na Bahia, mais precisamente em Salvador.
                        No começo, eram apenas contos orais. Papel
                        não era fácil de encontrar; caneta, jamais!
                        Aqui foi chamado de literatura popular;
                        povo sofrido e criativo, com tudo dava
                        jeito de rimar. <br />
                        Da Bahia, pelo Nordeste se espalhou. Segue
                        o link se você se interessou: 
                        www.ablc.com.br/o-cordel/historia-do-cordel/
                        </p>
                    </div>
                </div>
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
