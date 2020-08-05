import React from 'react';

import Header from '../../components/Header';

import { Container, TableContainer } from './styles';

const Add = () => {
  return (
    <>
      <Header />
      <Container>
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
                <td>></td>
              </tr>
              <tr>
                <td>AP</td>
                <td>25300</td>
                <td>></td>
              </tr>
              <tr>
                <td>BA</td>
                <td>25300</td>
                <td>></td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Add;
