import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Container, LinkElement } from './styles';

const Header = () => {
  const now = new Date();
  const dateFormarred = format(now, 'dd/MM/yyyy');
  const dayWeekFormarred = format(now, 'EEEE', { locale: pt });

  return (
    <Container>
      <header>
        <nav>
          <LinkElement to="/" exact>
            Listagem
          </LinkElement>
          <LinkElement to="/add">Adicionar</LinkElement>
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
