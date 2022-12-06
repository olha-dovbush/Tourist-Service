import styled from 'styled-components';
import { brandColors } from '../../common/constants/style.constants';

export const ErrorWrapper = styled.div`
  height: 100vh;
`;

export const ErrorText = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${brandColors.gold};
  letter-spacing: 1px;

  @media screen and (max-width: 930px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  @media screen and (max-width: 630px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
