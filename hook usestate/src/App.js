import React, { useState } from 'react';

function App() {

  const [ valor, setValor ] = useState(0);

  function funcAumentar(){
    setValor(valor + 1);
  }

  function funcDiminuir(){
    setValor(valor - 1);
  }

  return (

    <>
      <div>Quantidade de produtos no carrinho: <b>{ valor }</b></div>
      <button onCLick={funcAumentar}>Adicionar + 1 no carrinho</button>
      <button onCLick={funcDiminuir}>Remover 1 no carrinho</button>
    </>

  );
}

export default App;
