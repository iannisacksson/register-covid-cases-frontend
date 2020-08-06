import React, { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { formatDistance, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

import { Container, TableContainer, Updated } from './styles';
import apiCases from '../../services/apiCases';

const Add = () => {
  const [cases, setCases] = useState([]);
  const [caseOne, setCaseOne] = useState({});
  const [lastUpdate, setLastUpdate] = useState();
  const [modalIsOpen, setModelIsOpen] = useState();

  useEffect(() => {
    apiCases.get().then(response => {
      const casesData = response.data.infectedByRegion;
      const hourUpdate = parseISO(response.data.lastUpdatedAtApify);

      const distance = formatDistance(hourUpdate, new Date(), { locale: pt });

      setLastUpdate(distance);

      setCases(casesData);
    });
  }, []);

  function openModal(caseIndex) {
    setModelIsOpen(true);
    setCaseOne(caseIndex);
  }

  function closeModal() {
    setModelIsOpen(false);
  }

  return (
    <>
      <Header />
      <Container>
        <Updated>
          <p>Última atualização do APIFY foi a {lastUpdate}</p>
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
                    <button type="button" onClick={() => openModal(caseIndex)}>
                      <FiPlus />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
      <Modal
        caseIndex={caseOne}
        isOpen={modalIsOpen}
        handleClick={closeModal}
      />
    </>
  );
};

export default Add;
