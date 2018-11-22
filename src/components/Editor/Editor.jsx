import React, { Component } from "react";
import "./Editor.css";

import PeopleRight from "../../images/peopleRight.png";
import PeopleLeft from "../../images/peopleLeft.png";
import Star from "../../images/star.png";
import Fish from "../../images/fish.gif";
import Livro from "../../images/book.png";

import btnVoltar from "../../images/progress-button.png";
import btnExemplos from "../../images/progress-button.png";
import btnAjuda from "../../images/progress-button.png";
import btnConcluir from "../../images/botao_concluir_editor.png";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "white" };

    this.bkBranco = this.bkBranco.bind(this);
    this.bkMarron = this.bkMarron.bind(this);
    this.bkAmarelo = this.bkAmarelo.bind(this);
    this.bkRosa = this.bkRosa.bind(this);

    this.isParagraphValid = this.isParagraphValid.bind(this);
    this.isLineValid = this.isLineValid.bind(this);
    this.count_empty_lines = this.count_empty_lines.bind(this);
    this.filter_paragraphs = this.filter_paragraphs.bind(this);
    this.validateCordelTitle = this.validateCordelTitle.bind(this);
    this.validateCordelText = this.validateCordelText.bind(this);
    this.validateCordelWoodCut = this.validateCordelWoodCut.bind(this);
    this.validateCordel = this.validateCordel.bind(this);
  }

  bkBranco() {
    this.setState({ color: "white" });
    console.log(this.state);
  }

  bkMarron() {
    this.setState({ color: "#c69c6d" });
    console.log(this.state);
  }

  bkAmarelo() {
    this.setState({ color: "#fff899" });
    console.log(this.state);
  }

  bkRosa() {
    this.setState({ color: "#f79779" });
    console.log(this.state);
  }

  isParagraphValid(paragraph) {
    var lines = paragraph.split("\n");

    for (var i = 0; i < lines.length; i++) {
      if (!this.isLineValid(lines[i])) {
        return false;
      }
    }

    var linesNumber =
      paragraph.split("\n").length - this.count_empty_lines(paragraph);

    return linesNumber != 6 ? false : true;
  }

  isLineValid(line) {
    if (line.trim().length > 60) {
      return false;
    }

    return true;
  }

  count_empty_lines(text) {
    return text ? (text.match(/^[ \t]*$/gm) || []).length : 0;
  }

  filter_paragraphs(paragraphs) {
    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].trim().length == 0) {
        paragraphs.splice(i, 1);
        i--;
      }
    }

    return paragraphs;
  }

  validateCordelTitle(cordelTitle) {
    if (cordelTitle.trim().length == 0) {
      return false;
    }

    return true;
  }

  validateCordelText(cordelText) {
    if (cordelText.trim().length == 0) {
      return false;
    }

    var cordel_text_paragraphs = cordelText.split("\n\n");
    cordel_text_paragraphs = this.filter_paragraphs(cordel_text_paragraphs);

    for (var i = 0; i < cordel_text_paragraphs.length; i++) {
      if (!this.isParagraphValid(cordel_text_paragraphs[i])) {
        return false;
      }
    }

    return true;
  }

  validateCordelWoodCut() {
    console.log("ValidateCordelWoodCut"); // To-do
  }

  validateCordel() {
    var cordelTitle = document.getElementById("title").value;
    var cordelText = document.getElementById("cordel").value;

    var isCordelTitleValidated = this.validateCordelTitle(cordelTitle);
    var isCordelTextValidated = this.validateCordelText(cordelText);

    var modalTitleMessage;
    var modalTextMessage;
    var saveButtonMessage;

    if (isCordelTitleValidated && isCordelTextValidated) {
      modalTitleMessage = "Parabéns!!!";
      modalTextMessage =
        "Você acaba de concluir o seu cordel. Caso deseje baixá-lo, clique no botão verde abaixo. ";
      saveButtonMessage = "Baixar Cordel";
    } else {
      modalTitleMessage = "Antes de finalizar...";
      modalTextMessage =
        "Um cordel precisa de um título, um texto e uma xilogravura. Abra a janela de ajuda para visualizar um tutorial sobre a criação de cordeis.";
      saveButtonMessage = "Baixar mesmo assim";
    }

    var modalCode =
      '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" > <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLongTitle">' +
      modalTitleMessage +
      '</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body">' +
      modalTextMessage +
      '</div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal" > Voltar </button> <button type="button" class="btn btn-success">' +
      saveButtonMessage +
      "</button> </div> </div> </div> </div>";

    document.getElementById("modalCode").innerHTML = modalCode;

    document.getElementById("validateModal").click();
  }

  render() {
    console.log("rendering");
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

          <div>
            <h2>COR DO FUNDO</h2>
            {/* Tabela com as cores de background */}
            <div className="menuBackground">
              <table>
                <tbody>
                  <tr>
                    <td className="bkbranco" onClick={this.bkBranco} />
                    <td className="bkmarron" onClick={this.bkMarron} />
                    <td className="bkamarelo" onClick={this.bkAmarelo} />
                    <td className="bkrosa" onClick={this.bkRosa} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2>CRIANDO SEU CORDEL</h2>

          {/* Botão Ajudar */}
          <button className="btnAjuda" onClick="" title="Ajuda">
            <img src={btnAjuda} alt="Ajuda" />
          </button>
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
            <br />
            <h2>XILOGRAVURAS</h2>
            <div className="menuXilogravuras">
              {/* Imagens das Xilogravuras */}
              <img id="PeopleLeft" src={PeopleLeft} width="100" height="100" />
              <img
                id="PeopleRight"
                src={PeopleRight}
                width="100"
                height="100"
              />
              <img id="Star" src={Star} width="100" height="100" />
              <img id="Fish" src={Fish} width="100" height="100" />
            </div>
          </div>

          {/* Area do Editor */}
          <div className="areaEditor">
            <div className="background" style={style}>
              {/* Titulo do cordel */}
              <div clasName="editorTitulo">
                <input
                  type="text"
                  placeholder="Digite aqui o TÍTULO"
                  id="title"
                />
                <br />
              </div>

              {/* Area para coloca as xilogravuras */}
              <div className="editorXilogravuras" />

              {/* Area para digita os veros */}
              <div className="editorTexto">
                <textarea
                  rows="10"
                  cols="50"
                  placeholder="	Digite aqui o VERSOS de seu cordel!"
                  id="cordel"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Menu inferior */}
        <div className="menuBottom">
          {/* Botão Voltar */}
          <a href="/home" title="Voltar">
            <img src={btnVoltar} alt="Voltar" className="btn" />
          </a>

          {/* Botão Exemplos */}
          <a href="/exemplos" title="Exemplos">
            <img src={btnExemplos} alt="Exemplos" className="btn" />
          </a>

          {/* Botão Concluir */}
          <button className="btnConcluir" onClick={this.validateCordel}>
            <img src={btnConcluir} alt="Concluir" title="Concluir" />
          </button>
          {/* Remover esse trecho após validação
					<a href="/concluir"  title="Concluir">
					  <img src={ btnConcluir } alt="Concluir" className="btnConcluir"/>
					</a>
					*/}
        </div>

        <button
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          id="validateModal"
        >
          Launch demo modal
        </button>

        {/* Modal Code */}
        <div id="modalCode" />
      </div>
    );
  }
}
