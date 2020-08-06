import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import Header from '../../components/Header';
import { Container, TableContainer } from './styles';
import api from '../../services/api';

const Home = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get('/cases').then(response => {
      const casesFormatted = response.data.map(caseIndex => {
        return {
          ...caseIndex,
          dateFormatted: format(parseISO(caseIndex.date), 'dd/MM/yyyy'),
        };
      });

      setCases(casesFormatted);
    });
  }, []);
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
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {cases.map(caseIndex => (
                <tr key={caseIndex.state}>
                  <td>{caseIndex.state}</td>
                  <td>{caseIndex.count}</td>
                  <td>{caseIndex.dateFormatted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;
