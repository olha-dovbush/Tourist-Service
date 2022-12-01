import { useContext } from 'react';
import styled from 'styled-components';
import { SliderContext } from '../SliderContext';
import ArrowSVG from '../../../assets/icons/arrow_left.svg';
import { brandColors } from '../../../common/constants/style.constants';

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
`;

const ArrowLeft = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  background-image: url(${ArrowSVG});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 15px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: ${brandColors.bg};
  }
`;

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
  margin-right: 15px;
`;

export function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <StyledArrows>
      <ArrowLeft onClick={() => changeSlide(-1)} data-testid="arrow-left" />
      <ArrowRight onClick={() => changeSlide(1)} data-testid="arrow-right" />
    </StyledArrows>
  );
}
