import React, { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { formatDistance, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../../components/Header';

import { Container, TableContainer, Updated } from './styles';
import apiCases from '../../services/apiCases';

const Add = () => {
  const [cases, setCases] = useState([]);
  const [lastUpdate, setLastUpdate] = useState();

  useEffect(() => {
    apiCases.get().then(response => {
      const casesData = response.data.infectedByRegion;
      const hourUpdate = parseISO(response.data.lastUpdatedAtSource);

      const distance = formatDistance(hourUpdate, new Date(), { locale: pt });

      setLastUpdate(distance);

      setCases(casesData);
    });
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Updated>
          <p>Última atualização a {lastUpdate}</p>
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
              {cases.map(caseIndex => (
                <tr key={caseIndex.state}>
                  <td>{caseIndex.state}</td>
                  <td>{caseIndex.count}</td>
                  <td>
                    <button type="button">
                      <FiPlus />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Add;
