import React from "react"

const Square = (props) => {

  const handleClick= () => {
    props.handleGamePlay(props.index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>{props.square}</div>
    </>
  )
}
export default Square
