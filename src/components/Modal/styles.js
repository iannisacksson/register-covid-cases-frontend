import styled from 'styled-components';
import Modal from 'react-modal';
import { shade, transparentize } from 'polished';

const customStyles = {
  overlay: {
    background: `${transparentize(0.3, '#000')}`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export const CustomStyles = styled(Modal).attrs({
  style: customStyles,
})`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  h2 {
    font-weight: 500;
    color: #666360;
    padding: 20px 0;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  border-radius: 7px;
  width: 100%;
  border: 2px solid #969cb3;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  input {
    padding: 20px 0 10px 10px;
    border-width: 0px 0px 2px 0px;
    border-color: #fff;
    border-radius: 4px;
    width: 100%;
    outline: none;
    font-family: inherit;
    -webkit-appearance: none;

    &::placeholder {
      color: ${shade(-1.0, '#666360')};
    }

    &::-webkit-input-placeholder {
      opacity: 0;
      transition: inherit;
      color: rgba(0, 0, 0, 0.2);
    }

    &:focus::-webkit-input-placeholder {
      opacity: 1;
    }
  }

  input:focus {
    outline: 0;
    border-bottom: 2px solid #5636d3;
  }

  label {
    position: absolute;
    letter-spacing: 0.05em;
    font-size: 12px;
    top: -13px;
    left: 10px;
  }

  input:placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0rem, 2.125rem) scale(1.5);
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0rem, 1.2rem) scale(1.2);
    cursor: pointer;
    transform-origin: left bottom;
    color: #5636d3;
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
