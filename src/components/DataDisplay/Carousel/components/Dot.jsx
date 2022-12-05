import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { CarouselContext } from '../CarouselContext';
import { brandColors } from '../../../../common/constants/style.constants';

const StyledDot = styled.div`
  background-color: ${(props) => (props.selected ? `${brandColors.red}` : `${brandColors.gold}`)};
  border-radius: 50%;
  height: 25px;
  margin: 5px;
  width: 25px;
  cursor: pointer;
`;

export function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(CarouselContext);

  function onDotClick() {
    goToSlide(number);
  }
  return <StyledDot selected={slideNumber === number} onClick={onDotClick} />;
}

Dot.propTypes = {
  number: PropTypes.number.isRequired,
};
