import React, { useState } from "react";
import "./card.styles.css";

const Card: React.FC = () => {
  const [player, setPlayer] = useState("Player");
  const [points, setPoints] = useState(0);

  return (
    <div className="cardContainer">
      <p className="player">{player}</p>
      <p className ="points">{points}</p>
      <button onClick={addPoint}>+</button>
      <button onClick={subPoint}>-</button>
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
