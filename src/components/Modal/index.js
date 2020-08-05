import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';

import { CustomStyles, Container, Button } from './styles';
import api from '../../services/api';

const Modal = ({ isOpen, handleClick, caseIndex }) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState('');
  const [dateFormatted, setDateFormatted] = useState('');
  const history = useHistory();

  useEffect(() => {
    setDateFormatted(format(new Date(), 'dd/MM/yyyy'));
    setState(caseIndex.state);
    setCount(caseIndex.count);
  }, [caseIndex.state, caseIndex.count]);

  const handleSubmit = async e => {
    e.preventDefault();

    await api.post('/cases', { date: dateFormatted, state, count });

    history.push('/');
  };

  return (
    <>
      <CustomStyles
        isOpen={isOpen}
        onRequestClose={handleClick}
        contentLabel="Example Modal"
      >
        <h2>Adicionar novos casos</h2>
        <form onSubmit={handleSubmit}>
          <Container>
            <input
              name="uf"
              type="text"
              placeholder="PA"
              value={state}
              onChange={e => setState(e.target.value)}
            />
            <label htmlFor="uf">UF</label>
          </Container>
          <Container>
            <input
              name="cases"
              type="tel"
              placeholder="32503"
              value={count}
              onChange={e => setCount(e.target.value)}
            />
            <label htmlFor="cases">Quantidade de Casos</label>
          </Container>
          <Container>
            <input
              name="date"
              type="text"
              placeholder="07/08/2020"
              value={dateFormatted}
              onChange={e => setDateFormatted(e.target.value)}
            />
            <label htmlFor="date">Date</label>
          </Container>
          <Button type="submit">Adicionar</Button>
        </form>
      </CustomStyles>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  caseIndex: PropTypes.shape({
    state: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
};

export default Modal;
