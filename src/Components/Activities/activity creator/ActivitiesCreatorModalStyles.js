import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  transform: translate(-0.95%, -100%);
  width: 100%;
  height: 100%;
  z-index: 100;
`;
export const ModalContainer = styled.div`
  width: 70%;
  height: 50%;
  position: fixed;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  transition: transform 2s ease-in;
`;
export const CloseButton = styled.button`
  border: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 30px;
`;
export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
