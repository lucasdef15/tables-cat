import React from 'react';

const Diagnostico = () => {
  return (
    <div style={{ position: 'relative' }}>
      <section className='title_section_diagnostico'>
        <span>DIAGNÓSTICO</span>
      </section>

      <table className='atendimento_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1cm' }}>
            <td className='sixty format'>
              <span className='titleNumber'>60. Diagnóstico provável</span>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr style={{ display: 'flex', height: '1cm' }}>
            <td className='sixty-one format'>
              <span className='titleNumber'>61. CID - 10</span>
            </td>
          </tr>
        </tbody>
      </table>
      <table className='atendimento_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1cm' }}>
            <td className='sixty-two format'>
              <span className='titleNumber'>62. Observações</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Diagnostico;
