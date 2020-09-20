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
  /* para tirar o list-style para não ficar os numeros */
  list-style: none;

  width: 100%;
  /* grid porque valos colocar 5 barras um ao lado do outro */
  display: grid;
  /* 5 barinha um ao lado do outro */
`;

export const ReputationRow = styled.div``;

export const SupportIcon = styled(HiOutlineChatAlt2)`${iconCSS}`;

export const ClockIcon = styled(HiOutlineClock)`${iconCSS}`;

export const More = styled.a``;

