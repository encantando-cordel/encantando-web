import React, { Component } from 'react';
import './Editor.css';

import PeopleRight  from '../../images/peopleRight.png';
import PeopleLeft from '../../images/peopleLeft.png';
import Star from '../../images/star.png';
import Fish from '../../images/fish.gif';
import LivroBranco from '../../images/LivroBranco.png';
import LivroAzul from '../../images/LivroAzul.png';
import LivroMarrom from '../../images/LivroMarrom.png';
import LivroVerde from '../../images/LivroVerde.png';

export default class Editor extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			color: LivroBranco
		};
		this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
		this.backgroundAvailableColors = [
			{name: 'Branco', href: LivroBranco, class: 'bkbranco'}, 
			{name: 'Azul', href: LivroAzul, class: 'bkazul'}, 
			{name: 'Verde', href: LivroVerde, class: 'bkverde'}, 
			{name: 'Marrom', href: LivroMarrom, class: 'bkmarrom'}
		]
	}
			
	handleBackgroundColorChange(color) {
		this.setState({color: color})
	}

	createColors = () => {
		let table = []
		let children = []
		for (let i = 0; i < this.backgroundAvailableColors.length; i++) {
			let color = this.backgroundAvailableColors[i]
			children.push(
			<td className={color.class}>
				<a onClick={(e) => this.handleBackgroundColorChange(color.href, e)}>
				{color.name}
				</a>
			</td>)
		}
		table.push(<tr>{children}</tr>)
		return table
	}


    render() {
		var style = this.state;

		if (this.props.withsemi) {
			style.backgroundImage += ";";
		}
		
        return (
			<div>
				<div className="row">					
					<div className="col-3 left-menu">
						<br/>
						<table className="cores">
							<tbody>
								<tr>
                                    <th colSpan="4">Selecione a cor de fundo</th>
                                </tr>
								{ this.createColors() }
							</tbody>
						</table>
						<br/>
						<h5 className="text-center">Adicione xilogravuras</h5>
							<div className="xilografias">
								<img id = "PeopleLeft"  src = { PeopleLeft } width="50" height="50"/>
								<img id = "PeopleRight"  src = { PeopleRight }  width="50" height="50"/>
								<img id = "Star"  src = { Star }  width="50" height="50"/>
								<img id = "Fish"  src = { Fish }  width="50" height="50"/>
							</div>				
					</div>	
					
					<div className="col-9 editor">
						<br/>
						<input className="cordel-title text-center" type="text" placeholder="Título do seu cordel" size="80"/>
							<div className="white-background" style={ {backgroundImage: 'url(' + this.state.color + ')'}} >
								<div className="text-container">
									<textarea></textarea>
								</div>
							</div>
					</div>			   
			   </div>
			   <div className="bottom">
					<table className="menubottom">	
						<tbody>
							<tr>
                                <td>Voltar</td>
                                <td>Exemplos</td>
                                <td>Ajuda</td>
                                <td>Concluir</td>
                            </tr>
						</tbody>
					</table>
			   </div>
			</div>			
		)
    }
}