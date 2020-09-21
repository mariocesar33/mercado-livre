import styled, { css } from 'styled-components';
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from 'react-icons/hi';

export const Container = styled.div`
  /* padding de 48px para cima e baixo e 32px na laterais  */
  padding: 48px 32px;
  /* para ficar lado a lado */
  display: flex;
  /* ficam lado a lado mas em coluna */
  flex-direction: column;
  border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  /* para os items ficar  */
  display: flex;
  /* Todo os itens ficam centralizado lado a lado(vertical) */
  align-items: center;
  /* padding de 7px para cima e baixo e 0 na laterais  */
  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }
    > strong {
      font-size: 14px;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputationCard = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationThermometer = styled.ol`
  align-items: center;
  /* para tirar o list-style para não ficar os numeros */
  list-style: none;

  width: 100%;
  /* grid porque valos colocar 5 barras um ao lado do outro */
  display: grid;
  /* 5 barinha um ao lado do outro, 20% para cada, ou seja, 1fr cada */
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 7px;
  padding: 0 4px;

  > li {
    width: 100%;
    height: 8px;

    /* devinir a cores para cada para */
    &:nth-child(1) {
      background: var(--reputation-1);
    }
    &:nth-child(2) {
      background: var(--reputation-2);
    }
    &:nth-child(3) {
      background: var(--reputation-3);
    }
    &:nth-child(4) {
      background: var(--reputation-4);
    }
    &:nth-child(5) {
      background: var(--reputation-5);
    }

    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: 24px;
      font-weight: normal;
      height: 30px;
    }
    > span {
      font-size: 12px;
    }

    position: relative;

    /* apartir de segundo div cada um vai ter uma borda para esquerda */
    & + div {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 36px;
        border-left: 1px solid var(--color-border);
      }
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const More = styled.a`
  margin-top: 24px;
  color: var(--color-blue);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;

