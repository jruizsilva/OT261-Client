import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContainer = styled.div`
  width: 50%;
  height: 50%;
  position: relative;
  background-color: #ffff;
  border-radius: 5px;
`;
export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: black;
  width: 45px;
  height: 45px;
  transition: 0.3s easy all;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;
  color: #0d6efd;
  &:hover {
    background-color: #f2f2f2;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
