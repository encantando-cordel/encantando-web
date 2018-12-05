import React, { Component } from 'react';
import "./SextilhaInfo.css";

import btnAvancarSext from "../../images/botaoavancar.png";
import bntVoltarSext from "../../images/botaovoltar0.png";

import ProgressButton from "../../images/progress-button.png";

export default class SextilhaInfo extends Component {
    render() {
    	return (
	<div className = "mainSextInfo">
            	<div className="generalToSext">
      			<a className="nextToSext" href="/novo" title="sextilhaExample" >
		    		<img src={btnAvancarSext} alt="sextilhaExample" className="btn" />
		 	</a>	
      			<a className="backToSext" href="/activity" title="back" >
		    		<img src={bntVoltarSext} alt="back" className="btn" />
		 	</a>
		</div>
	</div>
        )
    }
}
