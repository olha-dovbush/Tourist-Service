import styled from 'styled-components';
import { brandColors, containerWidth } from '../../common/constants/style.constants';

export const ErrorWrapper = styled.div`
  height: 100vh;
`;

export const ErrorImage = styled.img`
  object-fit: cover;
  width: auto;
  height: 70vh;
  border-radius: 4px;
  border: 2px solid ${brandColors.gold};
  overflow: hidden;
  margin: 0 auto;
  display: grid;
  place-items: center;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 50.0488px 41.2345px rgba(0, 0, 0, 0.0532233),
    0px 30.1471px 24.8353px rgba(0, 0, 0, 0.0456112),
    0px 19.3198px 15.522px rgba(0, 0, 0, 0.0399626), 0px 12.5216px 9.63909px rgba(0, 0, 0, 0.035),
    0px 7.88218px 5.72858px rgba(0, 0, 0, 0.0300374),
    0px 4.5288px 3.06551px rgba(0, 0, 0, 0.0243888),
    0px 1.99324px 1.24005px rgba(0, 0, 0, 0.0167767);
`;

export const ErrorText = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${brandColors.gold};
  letter-spacing: 1px;

  @media screen and (max-width: 930px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  @media screen and (max-width: 630px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
