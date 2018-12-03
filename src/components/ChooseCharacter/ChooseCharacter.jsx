import React, { Component } from "react";
import "./ChooseCharacter.css";

import Woman from "../../images/woman-character.png";
import Man from "../../images/man-character.png";
import ManSelected from "../../images/man-character-selected.png";
import WomanSelected from "../../images/woman-character-selected.png";
import Book from "../../images/book.png";
import ProgressButton from "../../images/progress-button.png";

export default class ChooseCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgMan: Man,
      imgWoman: Woman,
      selected: false
    };
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  handleMouseClick(e) {
    if (this.state.imgMan === ManSelected && e.target.id === "womanCharacter") {
      this.setState({ imgMan: Man, imgWoman: WomanSelected });
      localStorage.setItem("character", "Sirlia");
    } else if (
      this.state.imgWoman === WomanSelected &&
      e.target.id === "manCharacter"
    ) {
      this.setState({ imgMan: ManSelected, imgWoman: Woman });
      localStorage.setItem("character", "Erivaldo");
    } else {
      e.target.id === "manCharacter"
        ? this.setState({ imgMan: ManSelected })
        : this.setState({ imgWoman: WomanSelected });
      localStorage.setItem("character", "Erivaldo");
    }
  }

  confirmCharacter() {
    if (this.state.imgMan === ManSelected) {
    } else if (this.state.imgWoman === WomanSelected) {
    }
  }

  render() {
    return (
      <div className="main">
        <div className="title character">
          <h1> ESCOLHA QUEM LHE GUIARÁ NESSA JORNADA</h1>
        </div>
        <div className="book">
          <img src={Book} alt="" />
        </div>
        <img
          id="progressButton"
          onClick={() => this.props.history.push("/apresentacao")}
          src={ProgressButton}
          alt=""
        />
        <img
          id="manCharacter"
          src={this.state.imgMan}
          onClick={this.handleMouseClick}
          alt=""
        />
        <h2 id="manCharacterName">ERIVALDO </h2>
        <img
          id="womanCharacter"
          src={this.state.imgWoman}
          onClick={this.handleMouseClick}
          alt=""
        />
        <h2 id="womanCharacterName">SÍRLIA </h2>
      </div>
    );
  }
}
