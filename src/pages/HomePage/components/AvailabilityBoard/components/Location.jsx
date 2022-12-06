import * as Styled from '../AvailabilityBoard.style';
import { ReactComponent as LocationSVG } from '../../../../../assets/icons/home-page/location.svg';

export function Location() {
  return (
    <Styled.BoardItem>
      <Styled.Title>Location</Styled.Title>
      <Styled.Box>
        <Styled.Text>Enter your destination</Styled.Text>
        <LocationSVG />
      </Styled.Box>
    </Styled.BoardItem>
  );
}
