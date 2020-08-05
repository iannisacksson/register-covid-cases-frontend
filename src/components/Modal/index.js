import React from 'react';
import PropTypes from 'prop-types';

import { CustomStyles, Container, Button } from './styles';

const Modal = ({ isOpen, handleClick }) => {
  return (
    <>
      <CustomStyles
        isOpen={isOpen}
        onRequestClose={handleClick}
        contentLabel="Example Modal"
      >
        <h2>Adicionar novos casos</h2>
        <form>
          <Container>
            <input name="uf" type="text" placeholder="UF" />
          </Container>
          <Container>
            <input name="cases" type="tel" placeholder="Quantidade de casos" />
          </Container>
          <Container>
            <input name="date" type="text" placeholder="Data" />
          </Container>
          <Button type="button">Cadastrar</Button>
        </form>
      </CustomStyles>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Modal;
