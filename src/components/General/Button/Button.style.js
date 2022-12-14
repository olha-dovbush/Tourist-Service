import styled, { css } from 'styled-components';
import { COLORS, WEIGHT } from '../../../common/constants/style.constants';

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  transition: all 0.3s ease-out;
  backface-visibility: hidden;

  @media screen and (max-width: 920px) {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

  ${(props) =>
    props.version === 'Primary' &&
    css`
      border: 4px solid ${COLORS.LightSeaGreen};
      background-color: ${COLORS.LightSeaGreen};
      color: ${COLORS.White};
      display: grid;
      place-content: center;
      transition: all 300ms ease-out;

      &:hover {
        border: 4px double ${COLORS.LightSeaGreen};
        background-color: ${COLORS.White};
        color: ${COLORS.LightSeaGreen};
      }
    `};

  ${(props) =>
    props.version === 'Primary' &&
    props.size === 'Small' &&
    css`
      padding: 10px 11px;
      border-radius: 28px;
      font-size: var(--20px);
      line-height: var(--20px);
    `};

  ${(props) =>
    props.version === 'Primary' &&
    props.size === 'Medium' &&
    css`
      padding: 6px 33px;
      border-radius: 24px;
      font-size: var(--18px);
      line-height: 27px;
    `};

  ${(props) =>
    props.version === 'Primary' &&
    props.size === 'Big' &&
    css`
      padding: 18px 35px;
      border-radius: 40px;
      font-size: 1.5rem;
      line-height: 2.25rem;
    `};

  ${(props) =>
    props.version === 'Secondary' &&
    css`
      border: 2px solid ${COLORS.LightSeaGreen};
      background-color: ${COLORS.LightSeaGreen};
      color: ${COLORS.White};
      border-radius: 0;
      letter-spacing: -0.38px;
      font-size: 1.5rem;
      line-height: 2.25rem;
      padding: 24px 31px;
      display: grid;
      place-content: center;
      transition: all 300ms ease-out;
      position: relative;
      overflow: hidden;

      &:after {
        position: absolute;
        content: '';
        top: 0%;
        left: 0%;
        transition: all 300ms ease-out;
        z-index: -1;
        background-color: ${COLORS.White};
        height: 100%;
        width: 0;
        opacity: 0;
      }

      &:hover {
        color: ${COLORS.LightSeaGreen};

        &::after {
          width: 100%;
          opacity: 1;
        }
      }
    `}

  ${(props) =>
    props.version === 'Gradient' &&
    css`
      width: 100%;
      background: linear-gradient(90deg, #ff9d4b 9.15%, #fa126c 101.52%);
      border-radius: 8px;
      font-weight: ${WEIGHT.semiBold};
      font-size: 18px;
      line-height: 27px;
      padding: 12px 0;
      border: none;
      color: ${COLORS.White};
      transition: background 300ms ease-out;

      &:hover {
        background: linear-gradient(90deg, #ffcc4b 9.15%, #fa123d 101.52%);
      }
    `}
  
  ${(props) =>
    props.version === 'Ghost' &&
    css`
      width: 100%;
      border-radius: 40px;
      border: 2px solid ${COLORS.GRAY.Gainsboro};
      color: ${COLORS.GRAY.CadetGray};
      font-size: 18px;
      line-height: 27px;
      background-color: ${COLORS.White};
      transition: all 300ms ease-out;
      padding: 12px 0;

      &:hover {
        background-color: ${COLORS.GRAY.Gainsboro};
        color: ${COLORS.GRAY.CadetGray};
      }
    `}
  
  ${(props) =>
    props.version === 'Outline' &&
    css`
      border-radius: 40px;
      background-color: ${COLORS.White};
      border: 1px solid ${COLORS.LightSeaGreen};
      color: ${COLORS.LightSeaGreen};
      padding: 20px 38px;
      letter-spacing: -0.38px;
      font-size: 1.5rem;
      line-height: 2.25rem;
      transition: all 300ms ease-out;

      &:hover {
        background-color: ${COLORS.LightSeaGreen};
        color: ${COLORS.White};
        border-color: ${COLORS.White};
      }
    `}
`;
