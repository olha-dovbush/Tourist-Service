import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { brandColors } from '../../../../../common/constants/style.constants';

export function ImageSlide({ data }) {
  return (
    <StyledSlide>
      <SlideImage src={`../../../../${data.url}`} alt={data.title} />
      <SlideTitle>{data.title}</SlideTitle>
    </StyledSlide>
  );
}

const StyledSlide = styled.div`
  flex: 1 0 100%;
  position: relative;
`;

const SlideImage = styled.img`
  display: flex;
  margin: 0 auto;
  max-height: 400px;
  width: 100%;
  object-fit: contain;
`;

const SlideTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: ${brandColors.dark};
  max-width: 800px;
  margin: 10px auto 0;
`;

ImageSlide.propTypes = {
  data: PropTypes.object.isRequired,
};
