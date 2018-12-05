import React from 'react'
import XilogravuraBoxItem from './XilogravuraBoxItem.js'

const XilogravuraBox = (props) => (
  <div className="menuXilogravuras">
    <div className="toolbox__items">
      {props.items.map(item => (
        <XilogravuraBoxItem
          key={item.i}
          item={item}
          onTakeItem={props.onTakeItem}
        />
      ))}
    </div>
  </div>
)

export default XilogravuraBox
