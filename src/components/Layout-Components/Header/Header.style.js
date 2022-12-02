import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../common/constants/style.constants';

export const Wrapper = styled.header`
  display: flex;
  height: 120px;
  align-items: center;
`;

export const Side = styled.div`
  margin-right: 107px;
`;

export const MainNavigation = styled.nav`
  display: flex;
  gap: 48px;
  margin-right: 34px;
`;

export const AuthorizationWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
  margin-left: auto;
  width: 220px;
`;

export const Login = styled(Link)`
  color: ${COLORS.OxfordBlue};
  font-size: 20px;
  line-height: 20px;
  transition: all 250ms;
  position: relative;

  &::after,
  &::before {
    position: absolute;
    opacity: 0;
    color: ${COLORS.LightSeaGreen};
    transition: opacity 200ms, transform 300ms;
  }

  &::before {
    content: '(';
    margin-right: 10px;
    transform: translateX(20px);
  }

  &::after {
    content: ')';
    margin-left: 10px;
    transform: translateX(-20px);
  }

  &:hover {
    color: ${COLORS.LightSeaGreen};

    &::after,
    &:before {
      transform: translateX(0);
      opacity: 1;
    }

    &::before {
      transform: translateX(-20px);
    }
  }
`;
