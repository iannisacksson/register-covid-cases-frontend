import React, { useEffect, useState, useCallback } from 'react';
import { format, parseISO, formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { FiTrash2 } from 'react-icons/fi';

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
          dateUpdated: formatDistance(
            parseISO(caseIndex.updatedAt),
            new Date(),
            {
              locale: pt,
            },
          ),
        };
      });
      setCases(casesFormatted);

      setLoading(false);

      if (casesFormatted.length === 0) setLoadingImg(true);
    });
  }, []);

  const handleDelete = useCallback(
    async caseIndex => {
      await api.delete(`/cases/${caseIndex.id}`);

      const findCaseIndex = cases.indexOf(caseIndex);

      cases.splice(findCaseIndex, 1);

      setCases([...cases]);

      if (cases.length === 0) setLoadingImg(true);
    },
    [cases],
  );
  return (
    <>
      <Header />
      <Container>
        {loadingImg ? (
          <BoxImage>
            <img src={add} alt="Add" />
            <p>
              Não há nenhum caso cadastrado. Navegue para a aba "Adicionar" para
              cadastrar novos casos.
            </p>
          </BoxImage>
        ) : (
          <>
            <Title>
              <p>Casos adicionados por estado</p>
            </Title>

            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Estado</th>
                    <th>Infectados</th>
                    <th>Data</th>
                    <th>Última Atualização</th>
                    <th>Deletar</th>
                  </tr>
                </thead>
                {loading ? (
                  <ComponentSkeleton qtdItems={5} />
                ) : (
                  <tbody>
                    {cases.map(caseIndex => (
                      <tr key={caseIndex.id}>
                        <td>{caseIndex.state}</td>
                        <td>{caseIndex.count}</td>
                        <td>{caseIndex.dateFormatted}</td>
                        <td>{caseIndex.dateUpdated}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleDelete(caseIndex)}
                          >
                            <FiTrash2 />
                          </button>
                        </td>
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
