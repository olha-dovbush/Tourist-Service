import { useState, useEffect } from 'react';

import { API } from '../../../../api';
import { Activity, AvailableDate, Location } from './components';
import { VisuallyHidden } from '../../../../components';

import * as Styled from './AvailabilityBoard.style';
import { ReactComponent as SearchSVG } from '../../../../assets/icons/home-page/Search.svg';

export function AvailabilityBoard() {
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [coordinates, setCoordinates] = useState({ latitude: '', longitude: '' });
  const [locationsList, setLocationsList] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    API.referenceData.locations.cities
      .get({
        keyword: location,
      })
      .then((result) => setLocationsList(result.name))
      .catch((err) => console.error(err));
  }, [location]);
  //
  // useEffect(() => {
  //   API.shopping.activities.get({ latitude: '', longitude: '' });
  // }, [location]);

  return (
    <Styled.Wrapper>
      <Styled.BoardList>
        <Location
          location={location}
          onLocationChange={(e) => setLocation(e.target.value)}
          locationsList={locationsList}
        />
        <Activity
          activitiesList={activitiesList}
          activity={activity}
          onActivityChange={(e) => setActivity(e.target.value)}
        />
        <AvailableDate setStartDate={setStartDate} startDate={startDate} />
      </Styled.BoardList>

      <Styled.Side>
        <Styled.CheckLink to="/">
          <SearchSVG />
          <VisuallyHidden>Check availability</VisuallyHidden>
        </Styled.CheckLink>
        <Styled.CheckText>Check Availability</Styled.CheckText>
      </Styled.Side>
    </Styled.Wrapper>
  );
}
