import { MAIN_CAROUSEL } from '../../common/constants/general.constants';
import { Carousel } from '../../components';
import { AvailabilityBoard } from './components';

import * as Styled from './HomePage.style';

export function HomePage() {
  return (
    <>
      <Carousel version="MainSlide" sliderItems={MAIN_CAROUSEL} />
      <Styled.AvailabilityWrapper>
        <AvailabilityBoard />
      </Styled.AvailabilityWrapper>
    </>
  );
}
