import { useContext } from 'react';
import { PropTypes } from 'prop-types';

import { CarouselContext } from '../CarouselContext';
import { MainSlide, ImageSlide } from './SlideVariants';

export function Slide({ data }) {
  const { version } = useContext(CarouselContext);

  let Component;

  switch (version) {
    case 'MainSlide':
      Component = <MainSlide data={data} />;
      break;
    default:
      Component = <ImageSlide data={data} />;
  }

  return Component;
}

Slide.propTypes = {
  data: PropTypes.object.isRequired,
};
