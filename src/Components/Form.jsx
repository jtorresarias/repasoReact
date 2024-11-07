import React, { useState } from "react";
import Card from "./Card";
import "../styles/styles.css";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    bandaFav: "",
    edad: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    const regexEsp = /^(?!\s).*/;

    if (
      user.nombre.length >= 3 &&
      regexEsp.test(user.nombre) &&
      user.bandaFav.length >= 6 &&
      regexNum.test(user.edad)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {show ? (
        <Card nombre={user.nombre} bandaFav={user.bandaFav} edad={user.edad} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Banda Favorito Rock:</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, bandaFav: event.target.value })
            }
          />
          <label>Edad:</label>
          <input
            type="number"
            onChange={(event) => setUser({ ...user, edad: event.target.value })}
          />

          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              “Por favor chequea que la información sea correcta”
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
