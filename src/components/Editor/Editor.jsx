import React, { Component } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import XilogravuraBox from '../../components/XilogravuraBox.js'
import "./Editor.css";

import jsPDF from 'jspdf';

import ave from "../../images/animais/ave.png";
import bois from "../../images/animais/bois.png";
import carneiro from "../../images/animais/carneiro.png";
import leao from "../../images/animais/leao.png";

import cactus from "../../images/cenarios/cactus.png";
import igreja from "../../images/cenarios/igreja.png";
import nordeste from "../../images/cenarios/nordeste.png";
import nordeste2 from "../../images/cenarios/nordeste2.png";

import estrela from "../../images/outros/estrela.png";
import historia from "../../images/outros/historia.png";
import luaimagem from "../../images/outros/luaimagem.png";
import rodaLoading from "../../images/outros/roda_loading.png";

import casal from "../../images/pessoas/casal.png";
import imagem1 from "../../images/pessoas/imagem1.png";
import imagem2 from "../../images/pessoas/imagem2.png";
import personagens from "../../images/pessoas/personagens.png";

import btnVoltar from "../../images/btt_voltar.png";
import btnExemplos from "../../images/btt_exemplos.png";
import btnConcluir from "../../images/btt_concluir1.png";
import btnArrow from "../../images/arrow-button.png";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class Editor extends Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    onLayoutChange: function() {},
    compactType: null,
    preventCollision: true
  };

  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      modalTitleMessage: "Default Title",
      modalTextMessage: "Default Text",
      modalSaveButtonMessage: "Default Save Message",
      items: [
        { i: "1", x: 2, y: 0, w: 2, h: 2, url: ave },
        { i: "2", x: 4, y: 0, w: 2, h: 2, url: bois },
        { i: "3", x: 6, y: 0, w: 2, h: 2, url: carneiro },
        { i: "4", x: 8, y: 0, w: 2, h: 2, url: leao },
        { i: "5", x: 10, y: 0, w: 2, h: 2, url: cactus },
        { i: "6", x: 12, y: 0, w: 2, h: 2, url: igreja },
        { i: "7", x: 14, y: 0, w: 2, h: 2, url: nordeste },
        { i: "8", x: 16, y: 0, w: 2, h: 2, url: nordeste2 },
        { i: "9", x: 18, y: 0, w: 2, h: 2, url: estrela },
        { i: "10", x: 20, y: 0, w: 2, h: 2, url: historia },
        { i: "11", x: 22, y: 0, w: 2, h: 2, url: luaimagem },
        { i: "12", x: 24, y: 0, w: 2, h: 2, url: rodaLoading },
        { i: "13", x: 26, y: 0, w: 2, h: 2, url: casal },
        { i: "14", x: 28, y: 0, w: 2, h: 2, url: imagem1 },
        { i: "15", x: 30, y: 0, w: 2, h: 2, url: imagem2 },
        { i: "16", x: 32, y: 0, w: 2, h: 2, url: personagens }
      ],
      pageActual: 0,
      itemsPerPage: [],
      itemsOn: [],
      newCounter: 16
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
    this.validateCordelWoodCut = this.validateCordelWoodCut.bind(this);
    this.validateCordel = this.validateCordel.bind(this);
    this.saveCordel = this.saveCordel.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("character") === "Erivaldo") {
      let validation_modal = document.getElementById("validation-modal");
      validation_modal.classList.add("help-character-validation-man");

      let general = document.getElementById("general");
      general.classList.add("help-character-guide-man");

      let teste = document.getElementById("teste");
      teste.classList.add("help-character-guide-man");

      let verses = document.getElementById("verses");
      verses.classList.add("help-character-guide-man2");

      let woodcut = document.getElementById("woodcut");
      woodcut.classList.add("help-character-guide-man");
    } else {
      let validation_modal = document.getElementById("validation-modal");
      validation_modal.classList.add("help-character-validation-woman");

      let general = document.getElementById("general");
      general.classList.add("help-character-guide-woman");

      let teste = document.getElementById("teste");
      teste.classList.add("help-character-guide-woman");

      let verses = document.getElementById("verses");
      verses.classList.add("help-character-guide-woman2");

      let woodcut = document.getElementById("woodcut");
      woodcut.classList.add("help-character-guide-woman");
    }

    this.pagination('next')
  }

  bkBranco() {
    this.setState({ color: "white" });
  }

  bkMarron() {
    this.setState({ color: "#c69c6d" });
  }

  bkAmarelo() {
    this.setState({ color: "#fff899" });
  }

  bkRosa() {
    this.setState({ color: "#f79779" });
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

    return linesNumber !== 6 ? false : true;
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
      if (paragraphs[i].trim().length === 0) {
        paragraphs.splice(i, 1);
        i--;
      }
    }

    return paragraphs;
  }

  validateCordelTitle(cordelTitle) {
    if (cordelTitle.trim().length === 0) {
      return false;
    }

    return true;
  }

  validateCordelText(cordelText) {
    if (cordelText.trim().length === 0) {
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

  validateCordelWoodCut(divXilogravuras) {
    if (divXilogravuras.hasChildNodes()) {
      return true
    }
    return false
  }

  saveCordel() {
    let cordelTitle = document.getElementById("title").value;
    let cordelText = document.getElementById("cordel").value;
    var doc = new jsPDF({
      orientation: 'landscape'
    });
    doc.setFontSize(25);
    doc.text(20, 20, cordelTitle);
    doc.setFontSize(14);
    doc.text(160, 20, cordelText);
    this.state.itemsOn.map((itemOn, index) => {
      const Y = (index + (60 * index) + 40);
      doc.addImage(itemOn.url, 'PNG', 50, Y, 50, 50);
    })
    doc.save(`${cordelTitle}.pdf`);
  }

  validateCordel() {
    var cordelTitle = document.getElementById("title").value;
    var cordelText = document.getElementById("cordel").value;
    const divXilogravuras = document.querySelector(".react-grid-layout");

    var isCordelTitleValidated = this.validateCordelTitle(cordelTitle);
    var isCordelTextValidated = this.validateCordelText(cordelText);
    var isCordelWoodCutValidated = this.validateCordelWoodCut(divXilogravuras);

    if (isCordelTitleValidated && isCordelTextValidated && isCordelWoodCutValidated) {
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

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };

    return (
      <div
        key={el.i}
        data-grid={el}
        style={{backgroundImage: `url(${el.url})`, backgroundSize: '100% 100%'}}
      >
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, el.i)}
        >
          x
        </span>
      </div>
    );
  }

  onTakeItem = item => {
    this.setState({
      itemsOn: this.state.itemsOn.concat({
        i: (this.state.newCounter + 1).toString(),
        x: (this.state.itemsOn.length * 2) % (this.state.cols || 12),
        y: Infinity,
        w: 2,
        h: 2,
        url: item.url
      }),
      newCounter: this.state.newCounter + 1
    });
  };

  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  onRemoveItem(i) {
    this.setState({ itemsOn: _.reject(this.state.itemsOn, { i: i }) });
  }

  pagination(status, el, limitItems = 4) {
    let newPageActual = this.state.pageActual;
    if (status === 'next') {
      newPageActual += 1;
    } else if (status === 'prev') {
      newPageActual -= 1;
    }

    const items = this.state.items;
    let result = [];
    let totalPage = Math.ceil(items.length / limitItems);
    let count = (newPageActual * limitItems) - limitItems;
    let delimiter = count + limitItems;

    if (newPageActual > 0 && newPageActual <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        if (items[i] !== null) {
          result.push(items[i]);
        }
        count++;
      }
      this.setState({
        pageActual: newPageActual,
        itemsPerPage: result
      })
    }
  }

  render() {
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
            ?<br/>Ajuda
          </button>
        </div>

        {/* Tela Principal */}
        <div className="editor">
          {/* Menu esquerdo */}
          <div className="menuLeft">
            {/* Menu das xilogravuras */}
            <br />
            <h2>XILOGRAVURAS</h2>
            <XilogravuraBox
              items={this.state.itemsPerPage}
              onTakeItem={this.onTakeItem}
            />
            <div className="text-right">
              <img
                className="arrow"
                src={btnArrow}
                alt=""
                onClick={this.pagination.bind(this, 'prev')}
              />
              <img
                className="arrow arrow-right"
                src={btnArrow}
                alt=""
                onClick={this.pagination.bind(this, 'next')}
              />
            </div>
          </div>

          {/* Area do Editor */}
          <div className="areaEditor">
            <div className="background" style={style}>
              {/* Titulo do cordel */}
              <div className="editorTitulo">
                <input
                  type="text"
                  placeholder="Digite aqui o TÍTULO"
                  id="title"
                />
                <br />
              </div>

              {/* | editorXilogravuras | Area para coloca as xilogravuras */}
              <ResponsiveReactGridLayout
                onLayoutChange={this.onLayoutChange}
                onBreakpointChange={this.onBreakpointChange}
                style={{width: '42%', height: '400px', marginLeft: '50px'}}
                {...this.props}
              >
                {_.map(this.state.itemsOn, el => this.createElement(el))}
              </ResponsiveReactGridLayout>

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
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {this.state.modalTitleMessage}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div id="validation-modal" className="modal-body">
                {this.state.modalTextMessage}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  className="btn btn-success"
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
          className="modal fade"
          id="exampleModalCenter2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Tela de Ajuda
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
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
                  <li className="nav-item">
                    <a
                      className="nav-link"
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
                  <li className="nav-item">
                    <a
                      className="nav-link"
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
                  <li className="nav-item">
                    <a
                      className="nav-link"
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
                <div className="tab-content mt-3" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="general"
                    role="tabpanel"
                    aria-labelledby="general-tab"
                  >
                    {"                                                     "}
                    Este guia foi feito para lhe ajudar a criar o seu próprio
                    cordel. Escolha dentre as abas acima para saber como
                    realizar cada etapa da criação do cordel.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="teste"
                    role="tabpanel"
                    aria-labelledby="teste-tab"
                  >
                    O seu cordel deve possuir um titulo. Não se esqueça dar um
                    nome ao seu cordel no editor.
                  </div>
                  <div
                    className="tab-pane fade"
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
                    className="tab-pane fade"
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
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
