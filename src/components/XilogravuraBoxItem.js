import React from 'react'

const XilogravuraBoxItem = (props) => (
  <div
    className="toolbox__items__item"
    onClick={props.onTakeItem.bind(undefined, props.item)}
    style={{backgroundImage: `url(${props.item.url})`, backgroundSize: '100% 100%'}}
  >
  </div>
)

export default XilogravuraBoxItem
