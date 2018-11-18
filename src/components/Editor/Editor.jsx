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
		this.state = LivroBranco;
		this.handleClick = this.handleClick.bind(this);
	}
			
	handleClick() {
		this.state = LivroVerde;
	}

	
    render() {
		var style = this.state;

		if (this.props.withsemi) {
			style.backgroundImage += ";";
		}
		
        return (
			<div>
				<div className="row">
					{/* Menu esquerdo */}
					
					<div className="col-3">
						<br/>
						<table className="cores">
							<tbody>
								<tr>
                                    <th colSpan="4">Selecione a cor de fundo</th>
                                </tr>
								<tr className="cores">
                                    <td className="bkbranco">
                                        <a onClick={this.handleClick}>Branco</a>
                                    </td>
                                    <td className="bkmarron">Marron</td>
								</tr>
								<tr className="cores">
                                    <td className="bkverde">Verde</td>
                                    <td className="bkazul">Azul</td>
                                </tr>
							</tbody>
						</table>
						<br/>
						<h5 class="text-center">Adicione xilogravuras</h5>
							<div className="xilografias">
								<img id = "PeopleLeft"  src = { PeopleLeft } width="50" height="50"/>
								<img id = "PeopleRight"  src = { PeopleRight }  width="50" height="50"/>
								<img id = "Star"  src = { Star }  width="50" height="50"/>
								<img id = "Fish"  src = { Fish }  width="50" height="50"/>
							</div>				
					</div>	
					
					{/* Editor */}
					<div className="col-9">
						<br/>
						<input class="cordel-title text-center" type="text" placeholder="Título do seu cordel" size="80"/>
							<div className="white-background" style={ {backgroundImage: 'url(' + style + ')'}} >
								<div className="text-container">
									<textarea></textarea>
								</div>
								<div className="editortexto">
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