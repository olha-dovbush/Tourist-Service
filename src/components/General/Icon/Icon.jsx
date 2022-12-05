import { PropTypes } from 'prop-types';
import styled from 'styled-components';

export function Icon({ children, className, ...delegated }) {
  return (
    <Wrapper className={className} {...delegated}>
      {children}
    </Wrapper>
  );
}

Icon.defaultProps = {
  className: 'icon',
};

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const Wrapper = styled.div`
  & > svg {
    display: block;
  }
`;
