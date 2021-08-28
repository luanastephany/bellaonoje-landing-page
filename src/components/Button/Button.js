import React from 'react'
import './Button.scss'

const Button = (props) => {
  const btnclass = `btn ${props.transparent ? 'transparent' : ''}`

  return (

    <button className={btnclass}>{props.children}</button>
  )
}

export default Button