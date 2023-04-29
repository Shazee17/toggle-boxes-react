import React from 'react'
import '../index.css'

const Box = (props) => {

    const style = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }

  return (
     <div
        style={style}
        className='box'
        onClick={props.toggle}
    >
    </div>
   
  )
}

export default Box