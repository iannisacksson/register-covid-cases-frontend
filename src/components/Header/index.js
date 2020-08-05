import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => (
  <Container>
    <header>
      <nav>
        <Link to="/">Listagem</Link>
        <Link to="/add">Adicionar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
