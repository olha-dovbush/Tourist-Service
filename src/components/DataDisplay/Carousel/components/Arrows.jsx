import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

import { CarouselContext } from '../CarouselContext';
import { brandColors, COLORS } from '../../../../common/constants/style.constants';
import ArrowPNG from '../../../../assets/icons/arrow_left_carousel.png';

export function Arrows({ version }) {
  const { changeSlide } = useContext(CarouselContext);

  return (
    <StyledArrows version={version}>
      <ArrowLeft onClick={() => changeSlide(-1)} data-testid="arrow-left" />
      <ArrowRight onClick={() => changeSlide(1)} data-testid="arrow-right" />
    </StyledArrows>
  );
}

const StyledArrows = styled.div`
  color: ${brandColors.white};
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 30%;
  z-index: 1;

  ${(props) =>
    props.version === 'MainSlide' &&
    css`
      justify-content: revert;
      width: 105px;
      top: revert;
      bottom: 25%;
      left: 12%;
      height: revert;
    `}
`;

const ArrowLeft = styled.div`
  height: 48px;
  width: 48px;
  cursor: pointer;
  background-image: url(${ArrowPNG});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  transition: background-color 0.2s;
  background-color: ${COLORS.GRAY.CharlestonGreen};

  &:hover {
    background-color: ${COLORS.LightSeaGreen};
  }
`;

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;

Arrows.propTypes = {
  version: PropTypes.string.isRequired,
};
