import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CharacterPresentation.css';

import btnAvancar from "../../images/botaoavancar.png";
import bntVoltar from "../../images/botaovoltar0.png";


class CharacterPresentation extends Component { 

  render() {
    return (
    <div className="presentation"> 
			<div className="general">
				<a className="next" href="/activity" title="activity" >
					<img src={btnAvancar} alt="activity" className="btn" />
				</a>	
				<a className="back" href="/Activity" title="back" >
					<img src={bntVoltar} alt="back" className="btn" />
				</a>
				</div>	
		</div>
    )
  }
}
export default CharacterPresentation
