import React, { useState } from 'react';

function App() {

  const [ valor, setValor ] = useState(0);

  return (
    <div>
      <p>Você clicou {valor} vezes.</p>
      <button onClick={() => setValor(valor + 1)}>
        Clique
      </button>
    </div>
  );
}

export default App;
