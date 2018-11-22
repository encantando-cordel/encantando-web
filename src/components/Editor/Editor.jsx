import React, { Component } from 'react';
import './Editor.css';

import PeopleRight  from '../../images/peopleRight.png';
import PeopleLeft from '../../images/peopleLeft.png';
import Star from '../../images/star.png';
import Fish from '../../images/fish.gif';
import Livro from '../../images/book.png';

import btnVoltar from '../../images/progress-button.png';
import btnExemplos from '../../images/progress-button.png';
import btnAjuda from '../../images/progress-button.png';
import btnConcluir from '../../images/botao_concluir_editor.png';

export default class Editor extends Component {
	
	constructor(props){
		super(props);
		this.state = { color: 'white'}; 
		
		this.bkBranco = this.bkBranco.bind(this);
		this.bkMarron = this.bkMarron.bind(this);
		this.bkAmarelo = this.bkAmarelo.bind(this);
		this.bkRosa = this.bkRosa.bind(this);
	}
			
	bkBranco() {
		this.setState({ color: 'white' });	
		console.log(this.state);
	}
	
	bkMarron(){
		this.setState({ color: '#c69c6d' });	
		console.log(this.state);
	}
	
	bkAmarelo(){
		this.setState({ color: '#fff899' });	
		console.log(this.state);
	}
	
	bkRosa(){
		this.setState({ color: '#f79779' });	
		console.log(this.state);
	}

	
    render() {
		console.log('rendering');
		var style = {
			backgroundColor: this.state.color		  
		};

		if (this.props.withsemi) {
			style.backgroundColor += ";"; 
		}
		
        return (
			<div className="main">
			
				{/* Menu Superior*/}
				<div className="menuTop">
				
					{/* Menu para selecionar as cores de background*/}
					
					<div >
						<h2>COR DO FUNDO</h2>
						{/* Tabela com as cores de background */}
						<div className="menuBackground">
							<table>
								<tbody>									
									<tr>
										<td className="bkbranco" onClick={this.bkBranco}></td>
										<td className="bkmarron" onClick={this.bkMarron}></td>
										<td className="bkamarelo" onClick={this.bkAmarelo}></td>
										<td className="bkrosa" onClick={this.bkRosa}></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					
					<h2>CRIANDO SEU CORDEL</h2>	
					
					{/* Botão Ajudar */}
					<button className="btnAjuda" onClick=""><img src={ btnAjuda } alt="Ajuda" /></button>
					{/* Remover esse trecho após validação
					<a href="/ajudar"  title="Ajudar">
						<img src={ btnVoltar } alt="Ajudar" className="btnAjuda"/>
					</a>
					*/}
				</div>
				
				{/* Tela Principal */}
				<div className="editor">
					{/* Menu esquerdo */}
					<div className="menuLeft">		
						
						{/* Menu das xilogravuras */}
						<br/>
						<h2>XILOGRAVURAS</h2>
						<div className="menuXilogravuras">
							{/* Imagens das Xilogravuras */}
							<img id = "PeopleLeft"  src = { PeopleLeft } width="100" height="100"/>
							<img id = "PeopleRight"  src = { PeopleRight }  width="100" height="100"/>
							<img id = "Star"  src = { Star }  width="100" height="100"/>
							<img id = "Fish"  src = { Fish }  width="100" height="100"/>
						</div>				
					</div>	
					
					{/* Area do Editor */}
					<div className="areaEditor">
						
							<div className="background" style={ style } >
							
								{/* Titulo do cordel */}
								<div clasName="editorTitulo">
									<input type="text" value="Digite aqui o TÍTULO"/><br/>
								</div>
								
								{/* Area para coloca as xilogravuras */}
								<div className="editorXilogravuras">
								</div>
								
								{/* Area para digita os veros */}
								<div className="editorTexto">
									<textarea rows="10" cols="50">
										Digite aqui o VERSOS de seu cordel!
									</textarea>
								</div>
							</div>
					</div>			   
			   </div>
			   
			   {/* Menu inferior */}
			   <div className="menuBottom">
				
					{/* Botão Voltar */}
					<a href="/home"  title="Voltar">
						<img src={ btnVoltar } alt="Voltar" className="btn"/>
					</a>
					
					{/* Botão Exemplos */}
					<a href="/exemplos"  title="Exemplos">
					  <img src={ btnExemplos } alt="Exemplos" className="btn"/>
					</a>					
					
					{/* Botão Concluir */}
					<button className="btnConcluir" onClick=""><img src={ btnConcluir } alt="Concluir" /></button>
				    {/* Remover esse trecho após validação
					<a href="/concluir"  title="Concluir">
					  <img src={ btnConcluir } alt="Concluir" className="btnConcluir"/>
					</a>
					*/}
				</div>	
				
			</div>			
		)
    }
}