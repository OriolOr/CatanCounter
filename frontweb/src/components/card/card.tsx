import React, { useState } from "react";
import "./card.styles.css";

type CardProps = {
  namePlayer: string
}

const Card: React.FC<CardProps> = ({namePlayer} : CardProps) => {

  const [points, setPoints] = useState(0);

  return (
    <div  className="cardContainer">
      <span contentEditable={true} className = "card_player" >{namePlayer}</span>
      <input type = "color" className = "inputColor"></input>
      <span className="points">{points}</span>
      <div className = "buttonPack" >
      <button onClick={addPoint}>+</button>
      <button onClick={subPoint}>-</button>
      </div>
    </div>
  );

  function addPoint() {
    setPoints(points + 1);
  }

  function subPoint() {
    if (points > 0) {
      setPoints(points - 1);
    }
  }
};

export default Card;
