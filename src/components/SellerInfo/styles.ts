import styled, { css } from 'styled-components';
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from 'react-icons/hi';

export const Container = styled.div`
  padding: 48px 32px;
`;

export const Title = styled.text``;

export const LocationCard = styled.div``;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputationCard = styled.div``;

export const ReputationThermometer = styled.ol``;

export const ReputationRow = styled.div``;

export const SupportIcon = styled(HiOutlineChatAlt2)`${iconCSS}`;

export const ClockIcon = styled(HiOutlineClock)`${iconCSS}`;

export const More = styled.a``;

