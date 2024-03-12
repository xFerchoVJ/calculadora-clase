import { useState } from "react";

function App() {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  };

  const handleChangeDos = (e) => {
    setNumeroDos(e.target.value);
  };

  const handleSumar = (event) => {
    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  };

  const handleRestar = () => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
  };
  const handleMult = () => {
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  };
  const handleDiv = () => {
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  };

  return (
    <>
      <h1>Calculadora</h1>
      <input
        type="text"
        placeholder="Numero 1"
        value={numeroUno}
        onChange={handleChangeUno}
      />
      <input
        type="text"
        placeholder="Numero 2"
        value={numeroDos}
        onChange={handleChangeDos}
      />
      <hr />
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleMult}>Multiplicar</button>
      <button onClick={handleDiv}>Dividir</button>
      <hr />
      <p>Resultado: {resultado}</p>
    </>
  );
}

export default App;
