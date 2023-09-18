import React from "react";
import card from "../style/card.module.css";

export default function StarwarCard({ name, src }) {
  return (
    <div className={card.cardWrapper}>
      <img className={card.cardImage} src={src}></img>
      <h5 className={card.cardText}>{name}</h5>
    </div>
  );
}
