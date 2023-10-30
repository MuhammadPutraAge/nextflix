import styled from "styled-components";
import { colors } from "@/utils";
import Image from "next/image";

export const MovieItemContainer = styled.div`
  padding: 1.6rem;
  box-shadow: 0 0 0.8rem ${colors.transparentBlack};
  border-radius: 0.8rem;
  display: flex;
  cursor: pointer;
`;

export const MovieItemPoster = styled.img`
  width: 12rem;
  margin-right: 1.6rem;
  z-index: 99;
`;

export const MovieItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MovieItemTypeContainer = styled.div`
  align-self: flex-start;
  padding: 0.6rem 1.8rem;
  background-color: ${colors.purple};
  border-radius: 0.4rem;
  margin-bottom: 0.8rem;
`;

export const MovieItemType = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${colors.white};
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const MovieItemTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: ${colors.black};

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const MovieItemYear = styled.p`
  font-size: 1.4rem;
  color: ${colors.grey};
`;
