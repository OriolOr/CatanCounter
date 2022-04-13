
import React, { useState } from "react";
import "./board.styles.css";
import Card from "../card/card";

const Board: React.FC = () => {
  
  const [playerList, setPlayer] = useState([{name: "Oriol" , points : 0}]);
  return (
    <React.Fragment>
      <div className="boardContainer">
      
      {playerList.map((player) => {
        return <Card namePlayer ={player.name} />; 
      })}
      </div>

      <div className ="addButtonContainer">
        <button id="addButton" onClick={AddPlayer}>Add</button>
        <button id="removeButton" onClick={RemovePlayer}>Remove</button>    
      </div>
    </React.Fragment>
  );

  function AddPlayer(){
    setPlayer(playerList.concat({name:"New Player", points: 0}));
  }

  function RemovePlayer(){
    const tempList = [...playerList];
    tempList.pop();
    setPlayer(tempList)
  }
};
export default Board;
