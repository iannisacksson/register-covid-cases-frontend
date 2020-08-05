import React from 'react';

import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container, TableContainer, Updated } from './styles';

const Add = () => {
  return (
    <>
      <Header />
      <Container>
        <Updated>
          <p>Última atualização a 24 minutos</p>
        </Updated>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Infectados</th>
                <th>Adicionar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PA</td>
                <td>25300</td>
                <td>
                  <button type="button">
                    <FiPlus />
                  </button>
                </td>
              </tr>
              <tr>
                <td>AP</td>
                <td>25300</td>
                <td>
                  <button type="button">
                    <FiPlus />
                  </button>
                </td>
              </tr>
              <tr>
                <td>BA</td>
                <td>25300</td>
                <td>
                  <button type="button">
                    <FiPlus />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Add;
