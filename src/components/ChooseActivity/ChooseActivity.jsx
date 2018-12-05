import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import itemView from '../../images/item1.png';
import itemViewHover from '../../images/item1_hover.png';
import itemCreate from '../../images/item2.png';
import itemCreateHover from '../../images/item2_hover.png';
import itemHistory from '../../images/item3.png';
import itemHistoryHover from '../../images/item3_hover.png';
import manFull from '../../images/persMAS_perfil.png';
import womanFull from '../../images/persFEM_perfil.png';
import fioVaral from '../../images/fio_varal.png';


class ChooseActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageView: itemView,
      imageCreate: itemCreate,
      imageHistory: itemHistory,
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseOver(imageState, imageOver) {
    this.setState({
      [imageState]: imageOver
    })
  }

  handleMouseOut(imageState, imageOut) {
    this.setState({
      [imageState]: imageOut
    })
  }

  render() {
    return (
      <div className="main">
        <div className="title">
          <h2>Escolha uma das atividades</h2>
        </div>
        <div className="container">
          <div className="row" style={{backgroundImage: `url(${fioVaral})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% -100%', backgroundSize: '62em'}}>
            <div className="col" style={{textAlign: 'center'}}>
              <Link to='/exemplo' className="btn-item">
                <img
                  src={ this.state.imageView }
                  alt=""
                  style={{width: '10em'}}
                  onMouseOver={() => this.handleMouseOver('imageView', itemViewHover)}
                  onMouseOut={() => this.handleMouseOut('imageView', itemView)}
                  data-tip="Exemplo"
                />
              </Link>
              <Link to='/novo' className="btn-item">
                <img
                  src={ this.state.imageCreate }
                  alt=""
                  style={{width: '10em'}}
                  onMouseOver={() => this.handleMouseOver('imageCreate', itemCreateHover)}
                  onMouseOut={() => this.handleMouseOut('imageCreate', itemCreate)}
                  data-tip="Novo"
                />
              </Link>
              <Link to='/history' className="btn-item">
                <img
                  src={ this.state.imageHistory }
                  alt=""
                  style={{width: '10em'}}
                  onMouseOver={() => this.handleMouseOver('imageHistory', itemHistoryHover)}
                  onMouseOut={() => this.handleMouseOut('imageHistory', itemHistory)}
                  data-tip="História"
                />
              </Link>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </div>
          </div>
          <div className="row">
            <div className="col"><img src={ manFull } alt="manFull" style={{width: '3em', marginLeft: '2em'}} /></div>
            <div className="col"><img src={ womanFull } alt="womanFull" style={{width: '4em', float: 'right', marginRight: '2em'}} /></div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button className="btn btn-basic btn-lg" style={{fontFamily: 'cordelFont', marginBottom: '2em', float: 'initial'}}>Sair></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChooseActivity
