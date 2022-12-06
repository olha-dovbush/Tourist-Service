import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../../../assets/icons/home-page/Logo.svg';

export function Logo() {
  return (
    <StyledIcon to="/">
      <LogoSVG />
    </StyledIcon>
  );
}

const StyledIcon = styled(Link)`
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &::after {
    border: 6px solid rgba(40, 175, 166, 0.2);
    width: 90px;
    height: 90px;
    transform: translateX(-50%) translateY(-50%) scale(0.8);
  }

  &::before {
    border: 2px solid rgba(40, 175, 166, 0.2);
    width: 100px;
    height: 100px;
    transform: translateX(-50%) translateY(-50%) scale(0.2);
  }

  &:hover {
    &::after,
    &::before {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
`;
