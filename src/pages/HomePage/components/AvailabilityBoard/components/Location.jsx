import { PropTypes } from 'prop-types';
import { v4 as uuid } from 'uuid';

import * as Styled from '../AvailabilityBoard.style';
import { ReactComponent as LocationSVG } from '../../../../../assets/icons/home-page/location.svg';

export function Location({ location, onLocationChange, locationsList }) {
  return (
    <Styled.BoardItem>
      <Styled.Title>Location</Styled.Title>
      <Styled.Box>
        <Styled.TextInput
          placeholder="Enter your destination"
          type="text"
          list="locations"
          value={location}
          onChange={onLocationChange}
        />
        <datalist id="locations">
          {locationsList?.map((item) => (
            <option key={uuid()}>{item.name}</option>
          ))}
        </datalist>
        <LocationSVG />
      </Styled.Box>
    </Styled.BoardItem>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  locationsList: PropTypes.array.isRequired,
};
