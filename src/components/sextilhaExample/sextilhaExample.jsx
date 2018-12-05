import React, { Component } from 'react';
import "./sextilhaExample.css";



import btnAvancar from "../../images/botaoavancar.png";
import bntVoltar from "../../images/botaovoltar0.png";

import ProgressButton from "../../images/progress-button.png";



export default class ExplainSexti extends Component {
    render() {
    	return (
    		<div className="mainSextExample">
    			
    			<div className="aux">
	    			<div className="Box">
	    				<p> Eu peço sua licença <br />
						Para falar da estrutura <br />
						Do cordel, tão lindo estilo <br />
						Dentro da literatura. <br />
						Sou fã incondicional <br />
						Dessa popular cultura. <br />
						<br />
						Uma estrofe se costura <br />
						Com a metrificação, <br />
						Com rimas muito perfeitas <br />
						E também com oração. <br />
						Eu vou falar da sextilha <br />
						Preste bastante atenção. <br />
						<br />

						Vou ressaltar, de antemão:<br />
						Quadra foi utilizada,<br />
						Estrofe de quatro versos,<br />
						Hoje é pouco propagada.<br />
						A que tem cinco, a quintilha,<br />
						Está quase abandonada.<br />
						<br />
						A sextilha aqui citada<br />
						É usada largamente<br />
						Por diversos escritores<br />
						De nossa amada vertente.<br />
						É estrofe de seis versos<br />
						É fácil, amigo, tente!<br />
						<br />

						O que se vê comumente<br />
						No tocante ao seu esquema<br />
						É usar uma só rima<br />
						Que não tem qualquer problema.<br />
						Basta ter inspiração,<br />
						Escolher bem o seu tema.<br />
						<br />

						No seu mais simples sistema<br />
						Dessa forma é feito o texto:<br />
						Só rimam os versos pares,<br />
						O segundo, quarto e sexto.<br />
						Os demais ficam sem rima<br />
						Para errar não tem pretexto!<br />
						<br />

						Sem sair desse contexto,<br />
						A sextilha usei aqui.<br />
						Um troço chamado "deixa"<br />
						Nestas linhas eu segui.<br />
						Esclareço, sem demora,<br />
						Como a obra construí.<br />
						<br />

						Meu perdão se confundi.<br />
						Eu explico, meu leitor:<br />
						"Seguindo a deixa" peguei<br />
						Lá da estrofe anterior<br />
						O seu verso derradeiro,<br />
						Rimei com o sucessor.<br />
						<br />

						É preciso ainda expor:<br />
						Na sextilha são cabíveis<br />
						Esquemas outros, distintos.<br />
						São nessa estrofe plausíveis,<br />
						Estão à disposição<br />
						Alternativas incríveis.<br />
						<br />

						Dentre todos os possíveis,<br />
						Do tal "aberto" tratei,<br />
						Com rimas nos versos pares,<br />
						Conforme já mencionei.<br />
						Inclusive foi com ele<br />
						Que este texto elaborei.<br />
						<br />

						Há vários outros, eu sei.<br />
						De mais dois apenas trato.<br />
						O "fechado" é atrativo<br />
						Para o amigo literato.<br />
						Não conhece, nunca viu?<br />
						A charada agora eu mato.<br />
						<br />

						As rimas pares, é fato,<br />
						Entre si são combinadas.<br />
						Primeira, terceira e quinta<br />
						Hão de ser também rimadas.<br />
						Vou mudar o esquema agora<br />
						Para mostrar as danadas.<br />
						<br />

						As rimas são colocadas<br />
						Todas no lugar devido.<br />
						Sonoras, sintonizadas<br />
						Fazem bem pro nosso ouvido<br />
						As palmas são variadas,<br />
						O poeta é sempre lido.<br />
						<br />

						Outro esquema permitido<br />
						É chamado de "corrido".<br />
						Eita, que mudei de novo!<br />
						Foi somente pra mostrar<br />
						Como se pode criar<br />
						Uma estrofes dessas, povo!<br />
						<br />

						Assim, acho que promovo<br />
						O cordel, minha paixão.<br />
						Espero, sim, ter cumprido<br />
						Mais uma boa missão.<br />
						Se gostaram, agradeço.<br />
						Até mais, um abração!<br />
						Jerson Brito<br />
						<br />

						Link com acervo de sextilhas:
						<a href="http://www.carlissongaldino.com.br/category/engenho/sextilhas"> link do acerto</a>
					</p> 
				</div>
				<img
					id="progressButton" className="button1"
					onClick={() => this.props.history.push("/activity")}
					src={ProgressButton}
					alt=""
				/>
				<img
					id="bntVoltar" className="button2"
					onClick={() => this.props.history.push("/sextilha-info")}
					src={bntVoltar}
					alt=""
				/>


			</div>

    		</div>
        )
    }
}
