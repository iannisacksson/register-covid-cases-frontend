import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TableBody = styled.tbody`
  td {
    padding: 20px 32px;
    border: 0;
    background: #fff;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;
    text-align: center;
  }

  td:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
