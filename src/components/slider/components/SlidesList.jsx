import { useContext } from 'react';
import styled from 'styled-components';
import { Slide } from './Slide';
import { SliderContext } from '../SliderContext';

const StyledSlidesList = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <StyledSlidesList style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </StyledSlidesList>
  );
}
