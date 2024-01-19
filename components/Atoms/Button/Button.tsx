import React from 'react'


interface props {
  text: string,
  onClick: any,
  type: any
  className: string
}

function Button(props:props) {
    const {text,onClick,type,className} = props
  return (
      <button onClick={onClick} type={type} className={className}>{text}</button>
  )
}

export default Button