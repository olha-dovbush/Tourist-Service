import { useState } from 'react';

import { Activity, AvailableDate, Location } from './components';
import { VisuallyHidden } from '../../../../components';

import * as Styled from './AvailabilityBoard.style';
import { ReactComponent as SearchSVG } from '../../../../assets/icons/home-page/Search.svg';

export function AvailabilityBoard() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Styled.Wrapper>
      <Styled.BoardList>
        <Location />
        <Activity />
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
