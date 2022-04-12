import React, { useState } from "react";
import "./board.styles.css";
import Card from "../card/card";

const Board: React.FC = () => {
  
  const [playerList, setPlayer] = useState([{name: "Oriol" , points : 0}]);
  const values = [0,1,2,3,4]
  return (
    <React.Fragment>
      <div className="boardContainer">
      {playerList.map(function (player) {
        return <p key={player.name}>Value {player.name}</p>;
      })}
      <Card/>
      </div>
      <div className ="addButtonContainer">
        <button onClick={AddPlayer}>Add</button>
        <button onClick={RemovePlayer}>Remove</button>
        
      </div>
    </React.Fragment>
  );

  function AddPlayer(){
    playerList.push({name: "Antonio" , points :  0})
    setPlayer(playerList);
    console.log(playerList)
  }

  function RemovePlayer(){
    playerList.pop()
    console.log(playerList)

  }
};

export default Board;
