import React from 'react';

const Atendimento = () => {
  return (
    <div style={{ position: 'relative' }}>
      <section className='title_section_atendimento'>
        <span>ATENTIMENTO</span>
      </section>
      <table className='atendimento_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1cm' }}>
            <td className='fifty-three format'>
              <span className='titleNumber'>
                53. Unidade de atendimento médico
              </span>
            </td>
            <td className='fifty-four format'>
              <span className='titleNumber'>54. Data</span>
            </td>
            <td className='fifty-five format'>
              <span className='titleNumber '>55. Hora</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='atendimento_wrapper'>
        <tbody>
          <tr style={{ display: 'flex', height: '1cm' }}>
            <td className='fifty-six format'>
              <section>
                <span className='titleNumber'>56. Houve internação?</span>
                <ol>
                  <li>Sim</li>
                  <li>Não</li>
                </ol>
              </section>
              <span className='square ajust__fifty-six'>0</span>
            </td>
            <td className='fifty-seven format'>
              <span className='titleNumber'>
                57. Duração provável do Tratamento
              </span>
            </td>
            <td className='fifty-eight format'>
              <section>
                <span className='titleNumber'>
                  58. Deverá o acidentado afastar-se do trabalho durante o
                  tratamento?
                </span>
                <ol>
                  <li>Sim</li>
                  <li>Não</li>
                </ol>
              </section>
              <span className='square ajust__fifty-eight'>0</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Atendimento;
