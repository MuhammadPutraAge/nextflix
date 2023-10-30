import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalPoster = styled.img`
  cursor: default;
  width: 20%;

  @media screen and (max-width: 1024px) {
    width: 30%;
  }

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;
