import React from "react";
const Card = ({ nombre, edad, bandaFav }) => {
  return (
    <div id="tarjeta">
      <h3>Hola {nombre}</h3>
      <h3>Tu Banda Favorita {bandaFav}</h3>
      <h3>Te Felicita por tus {edad} años</h3>
    </div>
  );
};

export default Card;
