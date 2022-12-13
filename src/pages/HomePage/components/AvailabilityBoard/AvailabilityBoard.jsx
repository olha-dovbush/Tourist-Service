import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { API } from '../../../../api';
import { Activity, AvailableDate, Location } from './components';
import { VisuallyHidden } from '../../../../components';

import * as Styled from './AvailabilityBoard.style';
import { ReactComponent as SearchSVG } from '../../../../assets/icons/home-page/Search.svg';

export function AvailabilityBoard({ setActivityInformation }) {
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [locationsList, setLocationsList] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    if (location.length > 2) {
      API.referenceData.locations.cities
        .get({
          keyword: location,
        })
        .then((result) => {
          setLocationsList(result.data);
        })
        .catch((err) => console.error(err));
    }
  }, [location]);

  function onLocationChange(e) {
    setLocation(e.target.value);
    const { latitude } = locationsList.find((item) => item.name === e.target.value)?.geoCode ?? '';
    const { longitude } = locationsList.find((item) => item.name === e.target.value)?.geoCode ?? '';

    if (longitude && latitude) {
      API.shopping.activities.get({ latitude, longitude }).then((result) => {
        setActivitiesList(result.data);
      });
    }
  }

  function onActivityChange(e) {
    setActivity(e.target.value);
    const concreteActivity = activitiesList.find((item) => item.name === e.target.value);
    setActivityInformation(concreteActivity);
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.BoardList>
          <Location
            location={location}
            locationsList={locationsList}
            onLocationChange={onLocationChange}
          />
          <Activity
            activitiesList={activitiesList}
            activity={activity}
            onActivityChange={onActivityChange}
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
      {/* <p>{activitiesList[0]?.bookingLink}</p> */}
      {/* <p>{activitiesList[0]?.description}</p> */}
      {/* <p>{activitiesList[0]?.name}</p> */}
      {/* <p>{activitiesList[0]?.pictures}</p> */}
      {/* <p>{activitiesList[0]?.shortDescription}</p> */}
      {/* <p>{activitiesList[0]?.minimumDuration}</p> */}
      {/* <p>{activitiesList[0]?.price.amount}</p> */}
      {/* <p>{activitiesList[0]?.price.rating}</p> */}
    </>
  );
}

AvailabilityBoard.propTypes = {
  setActivityInformation: PropTypes.func.isRequired,
};
