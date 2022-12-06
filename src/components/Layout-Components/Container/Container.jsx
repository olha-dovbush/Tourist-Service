import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { containerWidth } from '../../../common/constants/style.constants';

const StyledContainer = styled.div`
  max-width: ${(props) => props.size};
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
`;

export function Container({ children, size }) {
  return (
    <StyledContainer data-testid="container" size={size}>
      {children}
    </StyledContainer>
  );
}

Container.defaultProps = {
  children: null,
  size: containerWidth,
};

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};
