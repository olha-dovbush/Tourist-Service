import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { CarouselContext } from './CarouselContext';

import { Arrows, Dots, SlidesList } from './components';

import * as Styled from './Carousel.style';

export function Carousel(props) {
  const { width, height, autoPlay, autoPlayTime, sliderItems, sliderRef, showDots, version } =
    props;
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  function changeSlide(direction = 1) {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = sliderItems.length - 1;
    } else {
      slideNumber = (slide + direction) % sliderItems.length;
    }

    setSlide(slideNumber);
  }

  function goToSlide(number) {
    setSlide(number % sliderItems.length);
  }

  function handleTouchStart(e) {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(e) {
    if (touchPosition === null) return;
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(interval);
    };
  }, [sliderItems.length, slide]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValue = {
    goToSlide,
    changeSlide,
    sliderItems,
    slidesCount: sliderItems.length,
    slideNumber: slide,
    version,
  };

  return (
    <Styled.Slider
      style={{ width, height }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={sliderRef}
    >
      <CarouselContext.Provider value={providerValue}>
        <Arrows version={version} />
        <SlidesList />
        {showDots && <Dots />}
      </CarouselContext.Provider>
    </Styled.Slider>
  );
}

Carousel.defaultProps = {
  width: '100%',
  height: '100%',
  autoPlay: false,
  autoPlayTime: 5000,
  sliderRef: null,
  showDots: false,
};

Carousel.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  sliderItems: PropTypes.array.isRequired,
  sliderRef: PropTypes.object,
  showDots: PropTypes.bool,
  version: PropTypes.oneOf(['MainSlide', 'ImageSlide']).isRequired,
};
