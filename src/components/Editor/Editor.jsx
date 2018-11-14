import React, { Component } from 'react';
import './Editor.css';

import PeopleRight  from '../../images/peopleRight.png';
import PeopleLeft from '../../images/peopleLeft.png';
import Star from '../../images/star.png';
import Fish from '../../images/fish.gif';
import LivroBranco from '../../images/LivroBranco.png';
import LivroAzul from '../../images/LivroAzul.png';
import LivroMarron from '../../images/LivroMarron.png';
import LivroVerde from '../../images/LivroVerde.png';

export default class Editor extends Component {
	
	constructor(props){
		super(props);
		{/* this.state = { color: 'red'}; */}
		this.state = LivroBranco;
		
		this.handleClick = this.handleClick.bind(this);
	}
			
	handleClick() {
		console.log('hello world');
		{/* this.setState({ color: 'blue' }); */}
		console.log(this.state);
		this.state = LivroVerde;
		console.log(this.state);
	}

	
    render() {
		console.log('rendering');
		var style = this.state;
		/*{
			backgroundColor: this.state.color 
		  
		};*/

		if (this.props.withsemi) {
			/* style.backgroundColor += ";"; */
			style.backgroundImage += ";";
		}
		
        return (
			<div>
				<div className="row">
					{/* Menu esquerdo */}
					<div className="column">
						<br/>
						<table className="cores">
							<tbody>
								<tr><th colSpan="4">Selecione a cor de fundo.</th></tr>
								<tr className="cores"><td className="bkbranco"><a onClick={this.handleClick}>Branco</a></td><td className="bkmarron">Marron</td><td className="bkverde">Verde</td><td className="bkazul">Azul</td></tr>
							</tbody>
						</table>
						<br/>
						<h2>Xilogrfias</h2>
							<div className="xilografias">
								<img id = "PeopleLeft"  src = { PeopleLeft } width="150" height="150"/>
								<img id = "PeopleRight"  src = { PeopleRight }  width="150" height="150"/>
								<img id = "Star"  src = { Star }  width="150" height="100"/>
								<img id = "Fish"  src = { Fish }  width="150" height="100"/>
							</div>				
					</div>	
					{/* Editor */}
					<div className="columnCenter">
						<br/>
						<h2>Título do seu Cordel</h2>	
							<div className="background1" style={ {backgroundImage: 'url(' + style + ')'}} >
								<div className="editorxilografia">
									<p>aa</p>
								</div>
								<div className="editortexto">
								
								</div>
							</div>
					</div>			   
			   </div>
			   <div className="bottom">
					<table className="menubottom">	
						<tbody>
							<tr><td>Voltar</td><td>Exemplos</td><td>Ajuda</td><td>Concluir</td></tr>
						</tbody>
					</table>
			   </div>
			</div>			
		)
    }
}