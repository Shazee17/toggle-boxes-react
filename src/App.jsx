import { useState } from 'react'
import boxes from './boxes.js'
import Box from './components/Box.jsx'

const App = () => {
  const [squares, setSquares] = useState(boxes)

  const toggle = (id) => {
    setSquares(prevSquare => {
      return prevSquare.map(square => {
        return square.id === id ? {...square, on: !square.on} : square

        // const newSquares = []
        //     for(let i = 0; i < prevSquares.length; i++) {
        //         const currentSquare = prevSquares[i]
        //         if(currentSquare.id === id) {
        //             const updatedSquare = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquare)
        //         } else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));

  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;
