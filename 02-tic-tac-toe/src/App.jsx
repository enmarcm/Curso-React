import { useState } from "react";
import Square from "./Square.jsx";

const WINNER_COMBOS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6]  
]

function App() {
  const TURNS = {
    X: "x",
    O: "o",
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // Null es que no hay ganador, false es que hay empate

  const checkWinner = (boardToCheck) =>{
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo

      if(boardToCheck[a] && boardToCheck[a]===boardToCheck[b] && boardToCheck[a]===boardToCheck[c]){
        return boardToCheck[a]
      }
 
    }
    //Aun no hay ganador
    return null
  }
 
  const updateBoard = (index) => { 
    if(board[index] || winner) return 
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Verificamos si hay ganador 
    const newWinner = checkWinner(newBoard)
    console.log(newBoard)

    if(newWinner) {
      setWinner(newWinner)
      alert(`Ganó ${newWinner}`)
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} updateBoard={updateBoard} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
