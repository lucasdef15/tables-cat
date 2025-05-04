import React from 'react';

const Assinaturas2 = () => {
  return (
    <>
      <div className='signatures ajust__one'>
        <section
          className='signature ajust_position1'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '.2cm',
          }}
        >
          <strong style={{ color: 'transparent', userSelect: 'none' }}>
            Porto Ferreira, 01 de fevereiro de 2024
          </strong>
          <div
            style={{
              width: '7cm',
              borderBottom: '1px solid black',
            }}
          />
          <span>Local e data</span>
        </section>
        <section className='signature2 ajust_position2'>
          <div
            style={{
              width: '11cm',
              borderBottom: '1px solid black',
            }}
          />
          <span style={{ alignSelf: 'center' }}>
            Assinatura e Carimbo do médico com CRM
          </span>
        </section>
      </div>
      <div className='grayStripe'></div>
    </>
  );
};

export default Assinaturas2;
