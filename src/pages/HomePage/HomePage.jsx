import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { MAIN_CAROUSEL } from '../../common/constants/general.constants';
import { Carousel } from '../../components';
import { AvailabilityBoard } from './components';

import * as Styled from './HomePage.style';

export function HomePage() {
  const [activityInformation, setActivityInformation] = useState({});
  console.log({ activityInformation });

  return (
    <>
      <Carousel version="MainSlide" sliderItems={MAIN_CAROUSEL} />
      <Styled.AvailabilityWrapper>
        <AvailabilityBoard setActivityInformation={setActivityInformation} />
      </Styled.AvailabilityWrapper>
      <p dangerouslySetInnerHTML={{ __html: activityInformation?.description }} />
      {activityInformation?.pictures?.map((item) => (
        <div key={uuid()}>
          <img src={item} alt="tour" />
        </div>
      ))}
    </>
  );
}
