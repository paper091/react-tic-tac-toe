import React, { useState } from 'react'
export default function Square(props){

    // state
    // P1 (true | 1) = 'X'
    const [mark, setMark] = useState(null);

    function whoWon(t){
        if(t == 3){
            return 1;
        }
        else if(t == -3){
            return 2;
        }

        return -1;
    }
    function checkForWin(){
        let horizontal;
        let vertical;

        for(let i = 0; i < 3; i++){
            horizontal = props.sqArr[3*i] + props.sqArr[3*i+1] + props.sqArr[3*i+2];
            vertical = props.sqArr[i] + props.sqArr[i+3] + props.sqArr[i+6];

            let temp = whoWon(horizontal);
            if(temp!=-1){
                console.log("p"+temp+" won");
            } 
            temp = whoWon(vertical);
            if(temp!=-1){
                console.log("p"+temp+" won");
            } 
            
        }
        let mainDiagonal = props.sqArr[0] + props.sqArr[4] + props.sqArr[8];
        let secondaryDiagonal = props.sqArr[2] + props.sqArr[4] + props.sqArr[6];

        let temp = whoWon(mainDiagonal);
        if(temp!=-1){
            console.log("p"+temp+" won");
        } 
        temp = whoWon(secondaryDiagonal);
        if(temp!=-1){
            console.log("p"+temp+" won");
        } 

        
        
        if(Math.max(horizontal, vertical, mainDiagonal, secondaryDiagonal) == 3){
            console.log("Someone won");
        }
    }

    function clicked(){
        if(mark!=null){
            console.log("INVALID MOVE");
            // break;
        }
        else{
            let tempArr = props.sqArr;
            console.log("clicked");

            if(props.turn){
                setMark('X');
                tempArr[props.idx] = 1;
            }
            else{
                setMark('O');
                tempArr[props.idx] = -1;
            }

            console.log(tempArr);
            props.setTurn(!props.turn);
            props.setSqArr(tempArr);
            console.log(props.sqArr);
            // setMark(props.val);
            // v = "Clicked";
        }

        checkForWin();
    }
    

    return(
        <div className="square" onClick={clicked}>{mark}</div>
        
    )
}

