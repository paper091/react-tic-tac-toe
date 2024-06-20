import React, { useState } from 'react'

import Square from './Square'
// import {p, shuffle} from './engine'

// taking current player info as prop
export default function Board(props){

    // state to keep track of current status of teh board
    const [sqArr, setSqArr] = useState(Array(9).fill(null));

    // const [turn, setTurn] = useState(props.turn)
    return( 
        <div className='parent_grid'>
            <div className="parent_row">
                {/* setSqArr={setMark(props.val);} */}
                <Square val={sqArr[0]} 
                        idx = {0}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
                <Square val={sqArr[1]} 
                        idx = {1}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
                <Square val={sqArr[2]} 
                        idx = {2}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
            </div>
            <div className="parent_row">
                <Square val={sqArr[3]} 
                        idx = {3}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
                <Square val={sqArr[4]} 
                        idx = {4}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
                <Square val={sqArr[5]} 
                        idx = {5}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
            </div>
            <div className="parent_row">
                <Square val={sqArr[6]} 
                        idx = {6}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
                <Square val={sqArr[7]} 
                        idx = {7}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
                <Square val={sqArr[8]} 
                        idx = {8}
                        sqArr={sqArr}
                        setSqArr={setSqArr}
                        turn={props.turn}
                        setTurn={props.setTurn} 
                />
            </div>
        </div>
    )


}