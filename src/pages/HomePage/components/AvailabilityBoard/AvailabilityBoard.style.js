import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, WEIGHT } from '../../../../common/constants/style.constants';

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  padding: 1.2rem 3.2rem;
  background-color: ${COLORS.White};
  box-shadow: 0 43px 66px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  isolation: isolate;
`;

export const BoardList = styled.div`
  flex-basis: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoardItem = styled.div`
  padding: 8px;
  position: relative;

  &:not(:last-child)::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 50%;
    top: 15px;
    bottom: 0;
    margin: auto;
    right: -20px;
    background-color: ${COLORS.GRAY.Gainsboro};
  }
`;

export const Box = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-weight: ${WEIGHT.semiBold};
  color: ${COLORS.GRAY.CharlestonGreen};
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0.02em;
  position: relative;
  width: min-content;
  margin-bottom: 10px;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 7px;
    opacity: 0.7;
    background-color: ${COLORS.MaximumYellowRed};
    z-index: -1;
    bottom: 8px;
    left: 0;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  color: ${COLORS.GRAY.CadetGray};
  text-decoration: underline;
`;

export const TextInput = styled.input`
  border: none;
  font-size: 18px;
  line-height: 20px;
  min-width: 220px;
  padding: 5px 10px 0 0;

  &::placeholder {
    font-size: 18px;
    line-height: 20px;
    text-decoration: underline;
    color: ${COLORS.GRAY.CadetGray};
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CheckLink = styled(Link)`
  display: grid;
  place-content: center;
  width: 72px;
  padding: 24px;
  background-color: ${COLORS.LightSeaGreen};
  border-radius: 16px;

  & svg {
    transform: scale(1.15);
    path {
      fill: ${COLORS.White};
    }
  }
`;

export const CheckText = styled.span`
  color: #000;
  font-size: 12px;
  line-height: 20px;
`;
