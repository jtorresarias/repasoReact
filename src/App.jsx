import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Carga de estudiantes</h1>
      <Card />
    </>
  );
}

export default App;
