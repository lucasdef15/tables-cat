import React from 'react';

const Header_File = () => {
  return (
    <>
      <table>
        <tbody style={{ display: ' flex' }}>
          <thead>
            <img className='logo' src='/logo-cat.png' alt='' />
          </thead>
          <tr>
            <td className='one'>
              <span className='titleNumber'>1. Emitente</span>
              <span className='square'>1</span>
              <ol>
                <li>Empregador</li>
                <li>Sindicato</li>
                <li>Médico</li>
                <li>Segurado ou depentente</li>
                <li>Autoridade pública</li>
              </ol>
            </td>
            <td className='two'>
              <span className='titleNumber'>2. Tipo de CAT</span>
              <span className='square ajust__two'>1</span>
              <ol>
                <li>Inicio</li>
                <li>Reabertura</li>
                <li>Comunicação de Óbito</li>
              </ol>
              <span>____/____/____</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Header_File;
