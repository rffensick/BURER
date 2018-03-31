import React from 'react'
import styled from 'styled-components'
import Aux from '../../../hoc/Aux1'
import Backdrop from '../Backdrop/Backdrop'

const ModalDiv = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100vh)')};

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

const Modal = ({ show, children, modalClose }) => (
  <Aux>
    <Backdrop clicked={modalClose} show={show} />
    <ModalDiv show={show}>{children}</ModalDiv>
  </Aux>
)

export default Modal
