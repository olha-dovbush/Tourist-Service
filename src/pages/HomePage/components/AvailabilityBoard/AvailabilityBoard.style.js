import styled from 'styled-components';
import { COLORS } from '../../../../common/constants/style.constants';

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.2rem;
  background-color: ${COLORS.White};
  box-shadow: 0 43px 66px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
`;
