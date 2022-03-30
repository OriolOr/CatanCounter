import React, { useState } from "react";
import "./board.styles.css";
import Card from "../card/card";

const Board: React.FC = () => {
  
  const [playerList, setPlayer] = useState([]);
  return (
    <React.Fragment>
      <div className="boardContainer">
        <Card />
        <Card />
        <Card />
 
      </div>
      <div className ="addButtonContainer">
        <button onClick={AddPlayer}>Add</button>
        <button onClick={RemovePlayer}>Remove</button>
        
      </div>
    </React.Fragment>


  );

  function AddPlayer(){
    console.log("AddPlayer") 
  }

  function RemovePlayer(){
    console.log("RemvovePlayerer") 
  }

};

export default Board;
