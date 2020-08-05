import styled from 'styled-components';
import Modal from 'react-modal';
import { shade } from 'polished';

const customStyles = {
  content: {
    maxWidth: '600px',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export const CustomStyles = styled(Modal).attrs({
  style: customStyles,
})`
  h2 {
    font-weight: 500;
    color: #666360;
    padding: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #969cb3;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #969cb3;

    &::placeholder {
      color: ${shade(-1.0, '#666360')};
    }
  }
`;

export const Button = styled.button`
  background: #5636d3;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#5636d3')};
  }
`;
