import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => {
  const now = new Date();
  const dateFormarred = format(now, 'dd/MM/yyyy');
  const dayWeekFormarred = format(now, 'EEEE', { locale: pt });

  return (
    <Container>
      <header>
        <nav>
          <Link to="/">Listagem</Link>
          <Link to="/add">Adicionar</Link>
        </nav>

        <p>
          <strong> {dateFormarred} </strong>-
          <strong> {dayWeekFormarred} </strong>
        </p>
      </header>
    </Container>
  );
};

export default Header;
