
import React, { useState } from "react";
import "./board.styles.css";
import Card from "../card/card";

const Board: React.FC = () => {
  
  const [playerList, setPlayer] = useState([{name: "Oriol" , points : 0},{name: "Carla" , points : 0}]);
  return (
    <React.Fragment>
      <div className="boardContainer">
      
      {playerList.map((player) => {
        return <Card namePlayer ={player.name} />; 
      })}

      </div>
      <div className ="addButtonContainer">
        <button onClick={AddPlayer}>Add</button>
        <button onClick={RemovePlayer}>Remove</button>
        
      </div>
    </React.Fragment>
  );

  function AddPlayer(){
    playerList.push({name: "Antonio" , points :  0})
    console.log(playerList)
    setPlayer(playerList);

  }

  function RemovePlayer(){
    playerList.pop();
    console.log(playerList)
  }
};
export default Board;
