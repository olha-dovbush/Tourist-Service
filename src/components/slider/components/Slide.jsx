import propTypes, { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { brandColors } from '../../../common/constants/style.constants';

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

export function Slide({ data: { url, title } }) {
  return (
    <StyledSlide>
      <SlideImage src={`../../../${url}`} alt={title} />
      <SlideTitle>{title}</SlideTitle>
    </StyledSlide>
  );
}

Slide.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
