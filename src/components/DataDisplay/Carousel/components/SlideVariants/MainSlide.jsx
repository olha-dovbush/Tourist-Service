import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, WEIGHT } from '../../../../../common/constants/style.constants';
import { Icon } from '../../../../General';
import { ReactComponent as PaymentSVG } from '../../../../../assets/icons/home-page/Payment.svg';

export function MainSlide({ data }) {
  return (
    <Wrapper bg={data.url}>
      <TopBox>
        <Place>{data.place}</Place>
        <Title>{data.title}</Title>
      </TopBox>

      <BottomBox>
        <LeftSide>
          <Temperature>{data.temperature}</Temperature>
        </LeftSide>

        <RightSide>
          <Payments>
            <Icon style={{ flexShrink: 0, width: '64px', height: '64px' }}>
              <PaymentSVG />
            </Icon>
            <PaymentText>We Accept Payment Through All Cards & Banking</PaymentText>
          </Payments>
          <BookLink to="/">Book now!</BookLink>
        </RightSide>
      </BottomBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex: 1 0 100%;
  position: relative;
  background-image: ${({ bg }) => `url('${bg}')`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 650px;
  padding: 108px 83px 80px 134px;
`;

const TopBox = styled.div``;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const Place = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: ${COLORS.GRAY.CharlestonGreen};
`;

const Title = styled.h1`
  font-size: 128px;
  line-height: 192px;
  color: ${COLORS.GRAY.CharlestonGreen};
  margin-bottom: 60px;
`;

const BottomBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Temperature = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: ${COLORS.White};
  font-weight: ${WEIGHT.medium};
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
`;

const Payments = styled.div`
  display: flex;
  align-items: center;
  max-width: 438px;
  gap: 24px;
  margin-bottom: 8px;
`;

const PaymentText = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: ${COLORS.White};
`;

const BookLink = styled(Link)`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: ${COLORS.White};
  text-decoration: underline;
  font-weight: ${WEIGHT.bold};
  margin-left: 88px;
`;

MainSlide.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    place: PropTypes.string,
    temperature: PropTypes.string,
  }).isRequired,
};
