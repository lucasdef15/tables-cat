import React from 'react';
import '../styles/Emitente1.css';
import Header_File from './Header_File';
import Empregador from './Empregador';
import Acidentado from './Acidentado';
import StripeSide from './StripeSide';
import AcidenteOuDoença from './AcidenteOuDoença';
import Testemunhas from './Testemunhas';

const Emitente1 = () => {
  return (
    <>
      <StripeSide />
      <Header_File />
      <Empregador />
      <Acidentado />
      <AcidenteOuDoença />
      <Testemunhas />
    </>
  );
};

export default Emitente1;
