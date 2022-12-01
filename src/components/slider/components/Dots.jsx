import { useContext } from 'react';
import styled from 'styled-components';
import { SliderContext } from '../SliderContext';
import { Dot } from './Dot';

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: relative;
  z-index: 2;
`;

export function Dots() {
  const { slidesCount } = useContext(SliderContext);

  function renderDots() {
    const dots = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }
    return dots;
  }
  return <StyledDots>{renderDots()}</StyledDots>;
}
