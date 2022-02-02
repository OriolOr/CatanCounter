import React from "react";
import "./board.styles.css";
import Card from "../Card/card";

const Board: React.FC = () => {
  return (
    <div className="boardContainer">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Board;
