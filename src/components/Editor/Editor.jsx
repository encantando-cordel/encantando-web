import React, { Component } from "react";
import "./Editor.css";

import jsPDF from "jspdf";

import PeopleRight from "../../images/peopleRight.png";
import PeopleLeft from "../../images/peopleLeft.png";
import Star from "../../images/star.png";
import Fish from "../../images/fish.gif";
import Livro from "../../images/book.png";

import btnVoltar from "../../images/progress-button.png";
import btnExemplos from "../../images/progress-button.png";
import btnAjuda from "../../images/progress-button.png";
import btnConcluir from "../../images/botao_concluir_editor.png";

import jsPDF from "jspdf";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      modalTitleMessage: "Default Title",
      modalTextMessage: "Default Text",
      modalSaveButtonMessage: "Default Save Message"
    };

    this.bkBranco = this.bkBranco.bind(this);
    this.bkMarron = this.bkMarron.bind(this);
    this.bkAmarelo = this.bkAmarelo.bind(this);
    this.bkRosa = this.bkRosa.bind(this);

    this.isParagraphValid = this.isParagraphValid.bind(this);
    this.isLineValid = this.isLineValid.bind(this);
    this.countEmptyLines = this.countEmptyLines.bind(this);
    this.filterParagraphs = this.filterParagraphs.bind(this);
    this.validateCordelTitle = this.validateCordelTitle.bind(this);
    this.validateCordelText = this.validateCordelText.bind(this);
    this.validateCordelWoodCut = this.validateCordelWoodCut.bind(this); //To-do
    this.validateCordel = this.validateCordel.bind(this);
    this.saveCordel = this.saveCordel.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("character") == "Erivaldo") {
      var validation_modal = document.getElementById("validation-modal");
      validation_modal.classList.add("help-character-validation-man");

      var general = document.getElementById("general");
      general.classList.add("help-character-guide-man");

      var teste = document.getElementById("teste");
      teste.classList.add("help-character-guide-man");

      var verses = document.getElementById("verses");
      verses.classList.add("help-character-guide-man2");

      var woodcut = document.getElementById("woodcut");
      woodcut.classList.add("help-character-guide-man");
    } else {
      var validation_modal = document.getElementById("validation-modal");
      validation_modal.classList.add("help-character-validation-woman");

      var general = document.getElementById("general");
      general.classList.add("help-character-guide-woman");

      var teste = document.getElementById("teste");
      teste.classList.add("help-character-guide-woman");

      var verses = document.getElementById("verses");
      verses.classList.add("help-character-guide-woman2");

      var woodcut = document.getElementById("woodcut");
      woodcut.classList.add("help-character-guide-woman");
    }
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
      paragraph.split("\n").length - this.countEmptyLines(paragraph);

    return linesNumber != 6 ? false : true;
  }

  isLineValid(line) {
    if (line.trim().length > 60) {
      return false;
    }

    return true;
  }

  countEmptyLines(text) {
    return text ? (text.match(/^[ \t]*$/gm) || []).length : 0;
  }

  filterParagraphs(paragraphs) {
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
    cordel_text_paragraphs = this.filterParagraphs(cordel_text_paragraphs);

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

  saveCordel() {
    let cordelTitle = document.getElementById("title").value;
    let cordelText = document.getElementById("cordel").value;
    var doc = new jsPDF();
    doc.setFontSize(25);
    doc.text(20, 20, cordelTitle);
    doc.setFontSize(14);
    doc.text(20, 30, cordelText);
    doc.save(`${cordelTitle}.pdf`);
  }

  validateCordel() {
    var cordelTitle = document.getElementById("title").value;
    var cordelText = document.getElementById("cordel").value;

    var isCordelTitleValidated = this.validateCordelTitle(cordelTitle);
    var isCordelTextValidated = this.validateCordelText(cordelText);

    if (isCordelTitleValidated && isCordelTextValidated) {
      this.setState({
        modalTitleMessage: "Parabéns!!!",
        modalTextMessage:
          "Você acaba de concluir o seu cordel. Caso deseje baixá-lo, clique no botão verde abaixo.",
        modalSaveButtonMessage: "Baixar Cordel"
      });
    } else {
      this.setState({
        modalTitleMessage: "Antes de finalizar...",
        modalTextMessage:
          "Um cordel precisa de um título, um texto e uma xilogravura. clique no botão de ajuda para visualizar um tutorial sobre a criação de cordeis.",
        modalSaveButtonMessage: "Baixar mesmo assim"
      });
    }

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

          {/* Botão Ajuda (Ativador do modal de ajuda */}
          <button
            type="button"
            className="btnAjuda"
            data-toggle="modal"
            data-target="#exampleModalCenter2"
            title="Ajuda"
          >
            <img src={btnAjuda} alt="Ajuda" />
          </button>
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
        </div>

        {/* Ativador do Modal de validação */}
        <button
          type="button"
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          id="validateModal"
        >
          Launch demo modal
        </button>

        {/* Modal de validação (Pop-Up) \/ */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  {this.state.modalTitleMessage}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div id="validation-modal" class="modal-body">
                {this.state.modalTextMessage}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.saveCordel}
                >
                  {this.state.modalSaveButtonMessage}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de ajuda (pop-up) \/ */}

        <div
          class="modal fade"
          id="exampleModalCenter2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Tela de Ajuda
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="general-tab"
                      data-toggle="tab"
                      href="#general"
                      role="tab"
                      aria-controls="general"
                      aria-selected="true"
                    >
                      Geral
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="teste-tab"
                      data-toggle="tab"
                      href="#teste"
                      role="tab"
                      aria-controls="teste"
                      aria-selected="false"
                    >
                      Titulo
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="verses-tab"
                      data-toggle="tab"
                      href="#verses"
                      role="tab"
                      aria-controls="verses"
                      aria-selected="false"
                    >
                      Versos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="woodcut-tab"
                      data-toggle="tab"
                      href="#woodcut"
                      role="tab"
                      aria-controls="woodcut"
                      aria-selected="false"
                    >
                      Xilogravura
                    </a>
                  </li>
                </ul>
                <div class="tab-content mt-3" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="general"
                    role="tabpanel"
                    aria-labelledby="general-tab"
                  >
                    Este guia foi feito para lhe ajudar a criar o seu próprio
                    cordel. Escolhe dentre as abas acima para saber como
                    realizar cada etapa da criação do cordel.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="teste"
                    role="tabpanel"
                    aria-labelledby="teste-tab"
                  >
                    O seu cordel deve possuir um titulo. Não se esqueça dar um
                    nome ao seu cordel no editor.
                  </div>
                  <div
                    class="tab-pane fade"
                    id="verses"
                    role="tabpanel"
                    aria-labelledby="verses-tab"
                  >
                    Um cordel possui um ou mais paragráfos. Cada parágrafo deve
                    possuir versos, que são as linhas que você irá escrever no
                    lado direito do editor. É interessante criar versos que
                    terminem com palavras de som parecido. Além disso, atente-se
                    para o número de versos em cada parágrafo. (Por exemplo, se
                    estiver criando uma sextilha, cada parágrafo deve ter 6
                    linhas!)
                  </div>
                  <div
                    class="tab-pane fade"
                    id="woodcut"
                    role="tabpanel"
                    aria-labelledby="woodcut-tab"
                  >
                    Um cordel é mais bonito com desenhos! Clique nas figuras do
                    lado esquerdo do editor para adicionar um desenho ao seu
                    cordel!
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
