import React from 'react';

const TablesINSS = () => {
  return (
    <div style={{ position: 'relative' }}>
      <table className='inss_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1.3cm' }}>
            <td className='sixty-three format'>
              <span className='titleNumber'>63. Recebida</span>
              <section>
                <span>Em</span>
                <span>___/___/___</span>
              </section>
            </td>
            <td className='sixty-four format'>
              <span className='titleNumber'>64. Código da Unidade</span>
            </td>
            <td className='sixty-five format'>
              <span className='titleNumber'>65. Número do acidente</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='inss_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1.3cm' }}>
            <td className='sixty-six format'>
              <span className='titleNumber'>
                66. É reconhecido o direito do segurado à habilitação de
                benefício acidentário?
              </span>
              <ol>
                <li>Sim</li>
                <li>Não</li>
              </ol>
              <span className='square ajust__sixty-six'>0</span>
            </td>
            <td className='sixty-seven format'>
              <span className='titleNumber'>67. Tipo</span>
              <ol>
                <li>Típico</li>
                <li>Doença</li>
                <li>Trajeto</li>
              </ol>
              <span className='square ajust__sixty-seven'>0</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td style={{ all: 'unset' }}>
              <div className='signatures ajust_size'>
                <section
                  className='signature ajust_size1'
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
                      width: '5cm',
                      borderBottom: '1px solid black',
                    }}
                  />
                  <span>Matrícula</span>
                </section>
                <section className='signature2'>
                  <div
                    style={{
                      width: '8cm',
                      borderBottom: '1px solid black',
                    }}
                  />
                  <span style={{ alignSelf: 'center' }}>
                    Assinatura do servidor
                  </span>
                </section>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablesINSS;
