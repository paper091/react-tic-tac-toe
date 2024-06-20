import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

// can omit .js from Greet.js location
import Greet from './Components/Greet'
// import Square from './Components/Square'
import Board from './Components/Board'

function App() {

  //  to keep track of user turns
  const [turn, setTurn] = useState(true);

  return (
    <>
      {/* <Greet/> */}
      <Board  turn={turn}
              setTurn={setTurn} 

      />
    </>
  );
}

export default App;
