import React from 'react';

const Assinaturas = () => {
  return (
    <div className='signatures'>
      <section
        className='signature'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.2cm',
        }}
      >
        <strong>Porto Ferreira, 01 de fevereiro de 2024</strong>
        <div
          style={{
            width: '7cm',
            borderBottom: '1px solid black',
          }}
        />
        <span>Local e data</span>
      </section>
      <section className='signature2'>
        <div
          style={{
            width: '11cm',
            borderBottom: '1px solid black',
          }}
        />
        <span style={{ alignSelf: 'center' }}>
          Assinatura e Carimbo do emitente
        </span>
      </section>
    </div>
  );
};

export default Assinaturas;
