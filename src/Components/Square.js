import React, { useState } from 'react'

// state
const [mark, setMark] = useState = null;

export default function Square(props){

    function clicked(){
        console.log("clicked");
        setMark("X");
        // v = "Clicked";
    }
    

    return(
        <button className="square" onClick={clicked}>mark</button>
        
    )
}

