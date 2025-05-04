import React from 'react';
import Emitente1 from './components/Emitente1';
import AtestadoMedico from './components/Atestado_medico/AtestadoMedico';
import INSS from './components/INSS/INSS';

const App = () => {
  return (
    <div>
      <Emitente1 />
      <AtestadoMedico />
      <INSS />
    </div>
  );
};

export default App;
