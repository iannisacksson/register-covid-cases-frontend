import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
  .Toastify__toast--success {
    background: '#1C871E';
  }
  .Toastify__toast--error {
    background: #e83f5b;
  }
`;
export const showToast = ({ type, message }) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};
export default function ToastAnimated() {
  return <Toast />;
}
