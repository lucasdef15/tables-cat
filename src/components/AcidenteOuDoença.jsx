import React from 'react';

const AcidenteOuDoença = () => {
  return (
    <div>
      <section className='title_section_aci_doen'>
        <span>ACIDENTE OU DOENÇA</span>
      </section>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1cm' }}>
          <td className='thirty format'>
            <span className='titleNumber'>30. Data do acidente</span>
            <strong style={{ alignSelf: 'center' }}>0</strong>
          </td>
          <td className='thirty-one format'>
            <span className='titleNumber'>31. Hora do acidente</span>
            <strong style={{ alignSelf: 'center' }}>00:00</strong>
          </td>
          <td className='thirty-two format'>
            <span className='titleNumber'>
              32. Após quantas horas de trabalho?
            </span>
            <strong style={{ alignSelf: 'center' }}>00:00</strong>
          </td>
          <td className='thirty-three format'>
            <span className='titleNumber'>33. Houve afastamento?</span>
            <ol>
              <li>Sim</li>
              <li>Não</li>
            </ol>
            <span className='square ajust__thirty-three'>1</span>
          </td>
          <td className='thirty-four format'>
            <span className='titleNumber'>34. Último dia Trabalhado</span>
            <strong style={{ alignSelf: 'center' }}>0</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1cm' }}>
          <td className='thirty-five format'>
            <span className='titleNumber'>35. Local do acidente</span>
            <strong style={{ alignSelf: 'center' }}>1</strong>
          </td>
          <td className='thirty-six format'>
            <span className='titleNumber'>36. CNPJ</span>
            <strong style={{ alignSelf: 'center' }}>0</strong>
          </td>
          <td className='thirty-seven format'>
            <span className='titleNumber'>
              37. Municipio do local do acidente
            </span>
            <strong>0</strong>
          </td>
          <td className='thirty-eight format'>
            <span className='titleNumber'>38. UF</span>
            <strong style={{ alignSelf: 'center' }}>0</strong>
          </td>
          <td className='thirty-nine format'>
            <span className='titleNumber'>
              39. Especif. do local do acidente
            </span>
            <strong>0</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1cm' }}>
          <td className='forty format'>
            <span className='titleNumber'>
              40. Parte (s) do corpo atingida (s)
            </span>
            <strong>0</strong>
          </td>
          <td className='forty-one format'>
            <span className='titleNumber'>41. Agente causador</span>
            <strong>0</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '2.4cm' }}>
          <td className='forty-two format'>
            <span className='titleNumber'>
              42. Descrição da situação geradora do acidente ou doença
            </span>
            <strong>0</strong>
          </td>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <td className='forty-three format'>
              <span className='titleNumber'>43. Houve registro policial</span>
              <ol>
                <li>Sim</li>
                <li>Não</li>
              </ol>
              <span className='square ajust__forty-three'>2</span>
            </td>
            <td className='forty-four format'>
              <span className='titleNumber'>44. Houve morte?</span>
              <ol>
                <li>Sim</li>
                <li>Não</li>
              </ol>
              <span className='square ajust__forty-four'>2</span>
            </td>
          </div>
        </tr>
      </table>
    </div>
  );
};

export default AcidenteOuDoença;
