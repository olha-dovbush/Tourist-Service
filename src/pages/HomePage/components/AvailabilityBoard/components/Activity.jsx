import { PropTypes } from 'prop-types';
import { v4 as uuid } from 'uuid';

import * as Styled from '../AvailabilityBoard.style';
import { ReactComponent as ActivitySVG } from '../../../../../assets/icons/home-page/activity.svg';

export function Activity({ activity, onActivityChange, activitiesList }) {
  return (
    <Styled.BoardItem>
      <Styled.Title>Activity</Styled.Title>
      <Styled.Box>
        <Styled.TextInput
          placeholder="Tours & Trips"
          id="activity"
          type="text"
          list="ActivityList"
          value={activity}
          onChange={onActivityChange}
        />
        <datalist id="ActivityList">
          {activitiesList.map((item) => (
            <option key={uuid()}>{item.name}</option>
          ))}
        </datalist>
        <ActivitySVG />
      </Styled.Box>
    </Styled.BoardItem>
  );
}

Activity.propTypes = {
  activity: PropTypes.string.isRequired,
  onActivityChange: PropTypes.func.isRequired,
  activitiesList: PropTypes.array.isRequired,
};
