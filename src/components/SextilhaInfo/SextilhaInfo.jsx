import React, { Component } from 'react';
import "./SextilhaInfo.css";

import btnAvancarSext from "../../images/botaoavancar.png";
import bntVoltarSext from "../../images/botaovoltar0.png";

export default class SextilhaInfo extends Component {
    render() {
    	return (
	<div className = "mainSextInfo">
            	<div className="generalToSext">
      			<a className="nextToSext" href="/novo" title="Novo" >
		    		<img src={btnAvancarSext} alt="Novo" className="btn" />
		 	</a>	
      			<a className="backToSext" href="/character" title="back" >
		    		<img src={bntVoltarSext} alt="back" className="btn" />
		 	</a>
		</div>
	</div>
        )
    }
}
