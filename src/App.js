import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import Island from "./components/Island.png"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random()* board.length))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const handleGamePlay = (clickedSquare) => {
   //makes copy of board in state so that we can modify it in this method 
    let updateBoard = [...board]
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "🏴‍☠️"
      setBoard(updateBoard)
    } else if (clickedSquare === bombLocation) {
      updateBoard [clickedSquare] = "💣"
      setBoard(updateBoard)
    } else { 
      updateBoard[clickedSquare]="🌴"
      setBoard(updateBoard)
    }
    
  }

  const handleReset = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"])
    setTreasureLocation(Math.floor(Math.random()* board.length))
    setBombLocation(Math.random() * board.length)
  }

console.log("treasure:" , treasureLocation)
console.log("bomb:", bombLocation)

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="headder">
        <button onClick={handleReset}> Restart Game </button>
      </div>
     
      <div className="island">
        <picture>
          <source media='(min-width:0px' srcSet={Island} />
          <img src= {Island} alt="island" />
        </picture>
       </div>
      <div className="board-game">
          {board.map((square,index) => {
            return <Square 
                    square={square} 
                    index={index} 
                   key={index}
                    handleGamePlay={handleGamePlay}
                    />
          })}
      </div>
      
      
    </>  
  )
}

export default App
