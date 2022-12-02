import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { QUERIES } from '../../common/constants/style.constants';

const StyledSpacer = styled.div`
  margin-bottom: ${({ space }) => `${space.desktop / 16}rem`};

  @media ${QUERIES.upToTablet} {
    margin-bottom: ${({ space }) => `${space.laptop / 16}rem`};
  }

  @media ${QUERIES.upToMobile} {
    margin-bottom: ${({ space }) => `${space.mobile / 16}rem`};
  }
`;

export function Spacer({ space }) {
  return <StyledSpacer space={space} />;
}

Spacer.propTypes = {
  space: PropTypes.shapeOf({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
  }).isRequired,
};
