import { MAIN_CAROUSEL } from '../../common/constants/general.constants';
import { Carousel } from '../../components';
import { AvailabilityBoard } from './components';

export function HomePage() {
  return (
    <>
      <Carousel version="MainSlide" sliderItems={MAIN_CAROUSEL} />
      <AvailabilityBoard />
    </>
  );
}
