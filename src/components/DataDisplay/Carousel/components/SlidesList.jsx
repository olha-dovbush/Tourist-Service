import { useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { Slide } from './Slide';
import { CarouselContext } from '../CarouselContext';

export function SlidesList() {
  const { slideNumber, sliderItems } = useContext(CarouselContext);

  return (
    <StyledSlidesList style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {sliderItems.map((slide) => (
        <Slide key={uuid()} data={slide} />
      ))}
    </StyledSlidesList>
  );
}

const StyledSlidesList = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;
