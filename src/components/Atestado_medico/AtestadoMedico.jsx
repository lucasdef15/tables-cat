import React from 'react';
import '../../styles/AtestadoMedico.css';
import Atendimento from './Atendimento';
import StripeSideAten from './StripeSideAten';
import Lesao from './Lesao';
import Diagnostico from './Diagnostico';
import Assinaturas2 from './Assinaturas2';

const AtestadoMedico = () => {
  return (
    <>
      <StripeSideAten />
      <Atendimento />
      <Lesao />
      <Diagnostico />
      <Assinaturas2 />
    </>
  );
};

export default AtestadoMedico;
