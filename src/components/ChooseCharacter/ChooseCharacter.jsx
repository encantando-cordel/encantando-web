import React, { Component } from 'react';
import './ChooseCharacter.css';

import Woman from '../../images/woman-character.png';
import Man from '../../images/man-character.png';
import Book from '../../images/book.png';
import ProgressButton from '../../images/progress-button.png';

export default class ChooseCharacter extends Component {
    render() {
        return (
            <div className = "main">
                <div className = "title character">
                    <h1> ESCOLHA QUEM LHE GUIARÁ NESSA JORNADA</h1>
                </div>
                <div className = "book">
                    <img src= { Book } alt = ""/>
                </div>
                <img id = "progressButton" src= { ProgressButton } alt = ""/>
                <img id = "manCharacter" src = { Man } alt=""/>
                <h2  id = "manCharacterName">ERIVALDO </h2>
                <img id = "womanCharacter" src = { Woman } alt=""/>
                <h2  id = "womanCharacterName">SÍRLIA </h2>

            </div>
        )
    }
}
