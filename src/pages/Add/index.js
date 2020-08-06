import React, { useEffect, useState, useCallback } from 'react';
import Modal from 'react-modal';

import { FiPlus, FiCheck, FiXCircle, FiRefreshCw } from 'react-icons/fi';
import { formatDistance, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../../components/Header';
import ModalComponent from '../../components/Modal';
import ComponentSkeleton from '../../components/Skeleton';

import { Container, TableContainer, Updated } from './styles';
import apiCases from '../../services/apiCases';
import api from '../../services/api';

const Add = () => {
  const [cases, setCases] = useState([]);
  const [casesDB, setCasesDB] = useState([]);
  const [caseOne, setCaseOne] = useState({});
  const [lastUpdate, setLastUpdate] = useState();
  const [modalIsOpen, setModelIsOpen] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCases.get().then(response => {
      const casesData = response.data.infectedByRegion;
      const hourUpdate = parseISO(response.data.lastUpdatedAtApify);

      const distance = formatDistance(hourUpdate, new Date(), { locale: pt });

      setLastUpdate(distance);

      setCases(casesData);
      setLoading(false);
    });
    api.get('/cases').then(response => {
      const casesData = response.data;

      setCasesDB(casesData);
    });

    Modal.setAppElement('body');
  }, []);

  function openModal(caseIndex) {
    setModelIsOpen(true);
    setCaseOne(caseIndex);
  }

  function closeModal() {
    setModelIsOpen(false);
  }

  const verifyStateRegister = useCallback(
    state => {
      const stateExist = casesDB.find(caseTrue => caseTrue.state === state);

      return !stateExist;
    },
    [casesDB],
  );

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
                <th>Adicionar/Atualizar</th>
                <th>Adicionado</th>
              </tr>
            </thead>
            {loading ? (
              <ComponentSkeleton qtdItems={4} />
            ) : (
              <tbody>
                {cases.map(caseIndex => (
                  <tr key={caseIndex.state}>
                    <td>{caseIndex.state}</td>
                    <td>{caseIndex.count}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => openModal(caseIndex)}
                      >
                        {verifyStateRegister(caseIndex.state) ? (
                          <FiPlus />
                        ) : (
                          <FiRefreshCw />
                        )}
                      </button>
                    </td>
                    <td>
                      {verifyStateRegister(caseIndex.state) ? (
                        <FiXCircle />
                      ) : (
                        <FiCheck />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </TableContainer>
      </Container>
      <ModalComponent
        caseIndex={caseOne}
        isOpen={modalIsOpen}
        handleClick={closeModal}
      />
    </>
  );
};

export default Add;
