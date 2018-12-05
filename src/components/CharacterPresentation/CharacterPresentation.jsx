import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CharacterPresentation.css';

import btnAvancar from "../../images/botaoavancar.png";
import bntVoltar from "../../images/botaovoltar0.png";
import imageBackgroundWoman from "../../images/tela_apresentacao_personagem.png";
import imageBackgroundMan from "../../images/tela_explainsexti-homem.png";

class CharacterPresentation extends Component {

  render() {
    let imageBackground = imageBackgroundMan;
    if (localStorage.getItem('character') === 'Sirlia') {
      imageBackground = imageBackgroundWoman;
    }
    return (
    <div className="presentation" style={{backgroundImage: `url(${imageBackground})`}}>
      	<div className="general">
      		<a className="next" href="/activity" title="avançar" >
		    	  <img src={btnAvancar} alt="Novo" className="btn" />
		 	</a>
      		<a className="back" href="/character" title="voltar" >
		    	  <img src={bntVoltar} alt="back" className="btn" />
		 	</a>
         </div>
	</div>
    )
  }
}
export default CharacterPresentation
