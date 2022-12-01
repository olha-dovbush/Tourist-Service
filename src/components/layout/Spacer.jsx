import propTypes, { PropTypes, defaultProps } from 'prop-types';
import styled from 'styled-components';

const StyledSpacer = styled.div`
  margin-bottom: ${(props) => props.mobile};

  @media screen and (min-width: 700px) {
    margin-bottom: ${(props) => props.tablet};
  }

  @media screen and (min-width: 1110px) {
    margin-bottom: ${(props) => props.desktop};
  }

  @media screen and (min-width: 2000px) {
    margin-bottom: ${(props) => props.retina};
  }
`;

export function Spacer({ mobile, tablet, desktop, retina }) {
  return <StyledSpacer mobile={mobile} tablet={tablet} desktop={desktop} retina={retina} />;
}

Spacer.defaultProps = {
  mobile: '0.85rem',
  tablet: '1rem',
  desktop: '1.3rem',
  retina: '4rem',
};

Spacer.propTypes = {
  mobile: PropTypes.string,
  tablet: PropTypes.string,
  desktop: PropTypes.string,
  retina: PropTypes.string,
};
