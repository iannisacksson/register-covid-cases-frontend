import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import add from '../../assets/add.svg';
import Header from '../../components/Header';
import ComponentSkeleton from '../../components/Skeleton';
import { Container, BoxImage, TableContainer, Title } from './styles';
import api from '../../services/api';

const Home = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    api.get('/cases').then(response => {
      const casesFormatted = response.data.map(caseIndex => {
        return {
          ...caseIndex,
          dateFormatted: format(parseISO(caseIndex.date), 'dd/MM/yyyy'),
        };
      });

      setCases(casesFormatted);

      setLoading(false);

      if (casesFormatted.length === 0) setLoadingImg(true);
    });
  }, []);
  return (
    <>
      <Header />
      <Container>
        {loadingImg ? (
          <BoxImage>
            <img src={add} alt="Add" />
            <p>
              Não nenhum caso cadastrado. Navegue para a aba "Adicionar" para
              cadastrar novos casos
            </p>
          </BoxImage>
        ) : (
          <>
            <Title>
              <p>Casos cadastrados por estado</p>
            </Title>

            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Estado</th>
                    <th>Infectados</th>
                    <th>Data</th>
                  </tr>
                </thead>
                {loading ? (
                  <ComponentSkeleton />
                ) : (
                  <tbody>
                    {cases.map(caseIndex => (
                      <tr key={caseIndex.state}>
                        <td>{caseIndex.state}</td>
                        <td>{caseIndex.count}</td>
                        <td>{caseIndex.dateFormatted}</td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </TableContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
