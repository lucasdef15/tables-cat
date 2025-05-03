import React from 'react';

const Empregador = () => {
  return (
    <>
      <div className='title_section'>
        <span>EMPREGADOR</span>
      </div>
      <table className='emregador_wrapper1'>
        <tr style={{ display: 'flex', height: '1.1cm' }}>
          <td className='three'>
            <span className='titleNumber'>3. Razão Social / Nome</span>
            <div>
              <section>
                <strong>Prefeitura Municipal de Porto Ferreira</strong>
              </section>
            </div>
          </td>

          <td className='four'>
            <span className='titleNumber'>4. Tipo</span>
            <span className='square ajust__four'>1</span>
            <section
              style={{
                display: 'flex',
                gap: '.4rem',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
              }}
            >
              <ol>
                <li>CNPJ</li>
                <li>CEI</li>
                <li>CPF</li>
                <li>NIT</li>
              </ol>
              <strong style={{ alignSelf: 'start' }}>45.339.363/0001-94</strong>
            </section>
          </td>

          <td className='five'>
            <span className='titleNumber'>5. CNAE</span>
            <strong style={{ alignSelf: 'center' }}>84.11-6</strong>
          </td>
        </tr>
      </table>

      <table className='emregador_wrapper1 '>
        <tr style={{ display: 'flex', height: '1.1cm' }}>
          <td className='six'>
            <address>
              <span className='titleNumber'>6. Endereço</span>
              <span>Rua/Av.N°/Comp.</span>
            </address>
            <strong>Praça Cornélio Procópio, 90</strong>
          </td>

          <td className='bairro'>
            <span className='titleNumber'>Bairro</span>
            <strong>Centro</strong>
          </td>

          <td className='CEP'>
            <span className='titleNumber'>CEP</span>
            <strong>13660-009</strong>
          </td>

          <td className='seven'>
            <span className='titleNumber'>7. Municipio</span>
            <strong>Porto Ferreira</strong>
          </td>

          <td className='eight'>
            <span className='titleNumber'>8. UF</span>
            <strong>SP</strong>
          </td>

          <td className='nine'>
            <span className='titleNumber'>9. Telefone</span>
            <strong>(19)35895200</strong>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Empregador;
