import React from 'react';

const Acidentado = () => {
  return (
    <div>
      <section className='title_section_acidentado'>
        <span>ACIDENTADO(A)</span>
      </section>
      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1cm' }}>
          <td className='ten'>
            <span className='titleNumber'>10. Nome</span>
            <strong>0</strong>
          </td>
          <td className='eleven'>
            <span className='titleNumber'>11. Nome da mãe</span>
            <strong>0</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1cm' }}>
          <td className='twelve'>
            <span className='titleNumber'>12. Data de nasc.</span>
            <strong>0</strong>
          </td>

          <td className='thirteen'>
            <span className='titleNumber'>13. Sexo</span>
            <section className='sex'>
              <span>1. Masc.</span>
              <span>3. Fem.</span>
            </section>
            <span className='square ajust__thirteen'>1</span>
          </td>

          <td className='fourteen'>
            <span className='titleNumber'>14. Estado Civil</span>
            <ol>
              <li>Solteiro</li>
              <li>Casado</li>
              <li>Viúvo</li>
              <li>Sep.Judic</li>
              <li>Outro</li>
              <li>IGN</li>
            </ol>
            <span className='square ajust__fourteen'>4</span>
          </td>

          <td className='fifteen'>
            <section className='fifteen_titles'>
              <span className='titleNumber'>15. CTPS</span>
              <span className='titleNumber'>Série</span>
            </section>
            <section className='fifteen_titles'>
              <strong className='centerNumber'>0</strong>
              <strong className='nmber'>0</strong>
            </section>
          </td>

          <td className='data_emis'>
            <span className='titleNumber'>Data de emis.</span>
            <strong>0</strong>
          </td>

          <td className='sixteen'>
            <span className='titleNumber'>16. UF</span>
            <strong>0</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1.2cm' }}>
          <td className='seventeen'>
            <section
              className='section_format'
              style={{ marginRight: '1.5cm' }}
            >
              <span className='titleNumber'>17. carteira de identidade</span>
              <strong>..-</strong>
            </section>
            <section className='section_format'>
              <span>Data</span>
              <strong>0</strong>
            </section>

            <section className='section_format'>
              <span>Orgão Exp.</span>
              <strong>0</strong>
            </section>
          </td>

          <td className='eighteen'>
            <span className='titleNumber'>18. UF</span>
            <strong style={{ alignSelf: 'center' }}>0</strong>
          </td>

          <td className='nineteen'>
            <span className='titleNumber'>19. PIS/PASEP</span>
            <strong style={{ alignSelf: 'center' }}>0..- </strong>
          </td>

          <td className='twenty'>
            <span className='titleNumber'>20. Remuneração mensal</span>
            <strong style={{ alignSelf: 'center' }}>R$0,00</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1.1cm' }}>
          <td className='twenty-one'>
            <section>
              <span className='titleNumber'>21. Endereço</span>
              <span className='titleNumber'>Rua/Av./Nº/Comp.</span>
            </section>
            <strong>0</strong>
          </td>

          <td className='Bairro-twenty'>
            <span className='titleNumber'>Bairro</span>
            <strong>0</strong>
          </td>

          <td className='CEP-twenty'>
            <span className='titleNumber'>CEP</span>
            <strong style={{ alignSelf: 'center' }}>-</strong>
          </td>

          <td className='twenty-two'>
            <span className='titleNumber'>22. Municipio</span>
            <strong>0</strong>
          </td>

          <td className='twenty-three'>
            <span className='titleNumber'>23. UF</span> <strong>0</strong>
          </td>

          <td className='twenty-four'>
            <span className='titleNumber'>24. Telefone</span>
            <strong>() -</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1.1cm' }}>
          <td className='twenty-five'>
            <span className='titleNumber'>25. Nome da ocupação</span>
            <strong>0</strong>
          </td>

          <td className='twenty-six'>
            <span className='titleNumber'>26. CBO</span>
            <strong style={{ alignSelf: 'center' }}>-</strong>
          </td>
          <td className='twenty-seven'>
            <span className='titleNumber'>
              27. Filiação à Previdência Social
            </span>

            <section>
              <span>1. Empregado</span>
              <span>2. Trab.Avulso</span>
              <span>7. Sege.special</span>
              <span>8. Médico resid.</span>
            </section>
            <span className='square ajust__twenty-seven'>1</span>
          </td>
          <td className='twenty-eight'>
            <span className='titleNumber'>28. Aposentado?</span>

            <section>
              <ol>
                <li>Sim</li>
                <li>Não</li>
              </ol>
            </section>
            <span className='square ajust__twenty-eight'>2</span>
          </td>
          <td className='twenty-nine'>
            <span className='titleNumber'>29. Área</span>

            <section>
              <ol>
                <li>Urbano</li>
                <li>Rural</li>
              </ol>
            </section>
            <span className='square ajust__twenty-nine'>1</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Acidentado;
