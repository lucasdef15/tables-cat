import React from 'react';

const Lesao = () => {
  return (
    <div style={{ position: 'relative' }}>
      <section className='title_section_lesao'>
        <span>LESÃO</span>
      </section>

      <table className='atendimento_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1.1cm' }}>
            <td className='fifty-nine format'>
              <span className='titleNumber'>
                59. Descrição e natureza da lesão
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Lesao;
