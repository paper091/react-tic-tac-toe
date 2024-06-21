import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App: React.FC = ()=>{
  return (
    <Board/>
  );
}


// IMMEDIATE CHILD
const Board: React.FC = ()=> {


  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<(string|null)[]>(Array(9).fill(null));
  
  const handleClick = (i: number):void => {

    // handling a move already placed
    if(squares[i]){
      return;
    }

    // temporary array
    const nextSquares = squares.slice();

    // updating the temp array acc to current move
    if(xIsNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }
    setXIsNext(!(xIsNext));
    

    // updating state array
    setSquares(nextSquares);
    // setValue("X");
  }

  // Finding the winner using helper function
  const winner:(string|null) = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }
  else{
      status = "Next Player: " + ((xIsNext)?"X":"O");
  }

  return(
  
  <div>

    <div className="status">{status}</div>
    <div className="board-row">
      <Square val={squares[0]} onSquareClick={()=>{handleClick(0)}}/>
      <Square val={squares[1]} onSquareClick={()=>{handleClick(1)}}/>
      <Square val={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
    </div>
    <div className="board-row">
      <Square val={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
      <Square val={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
      <Square val={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
    </div>
    <div className="board-row">
      <Square val={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
      <Square val={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
      <Square val={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
    </div>

  </div>
  )
}

// typescript functional component
// misiing FC thing
interface SquareProps{
  val: string|null;
  onSquareClick: ()=>void;
} 
// IMMEDIATE CHILD
const Square:React.FC<SquareProps> = ({val, onSquareClick}) => {
  
  // const [value, setValue] = useState<string|null>(null);

  return <button className="square" onClick={onSquareClick}>{val}</button>
}

// helper function
const calculateWinner = (squares: (string|null)[]):(string|null)=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
