import React from 'react';

import { CustomStyles, Container, Button } from './styles';

const Modal = ({ isOpen }) => {
  function closeModal() {
    isOpen = false;
  }

  return (
    <>
      <CustomStyles
        isOpen={isOpen}
        onRequestClose={closeModal}
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

export default Modal;
