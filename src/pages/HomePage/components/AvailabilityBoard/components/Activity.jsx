import * as Styled from '../AvailabilityBoard.style';
import { ReactComponent as ActivitySVG } from '../../../../../assets/icons/home-page/activity.svg';

export function Activity() {
  return (
    <Styled.BoardItem>
      <Styled.Title>Activity</Styled.Title>
      <Styled.Box>
        <Styled.Text>Tours & Trips</Styled.Text>
        <ActivitySVG />
      </Styled.Box>
    </Styled.BoardItem>
  );
}
