import { forwardRef } from 'react';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';

import * as Styled from '../AvailabilityBoard.style';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import { ReactComponent as DateSVG } from '../../../../../assets/icons/home-page/date.svg';

const StyledCustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button className="input-box" type="button" ref={ref} onClick={onClick}>
      <p className="input-text">Set date</p>
      <DateSVG />
    </button>
    <p className="input-value">{value}</p>
  </>
));

StyledCustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

StyledCustomInput.defaultProps = {
  value: '12/06/22',
};

export function AvailableDate({ setStartDate, startDate }) {
  return (
    <Styled.BoardItem>
      <Styled.Title>Date</Styled.Title>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<StyledCustomInput onClick={(date) => setStartDate(date)} />}
      />
    </Styled.BoardItem>
  );
}

AvailableDate.propTypes = {
  setStartDate: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
};
