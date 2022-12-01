import { PropTypes } from 'prop-types';
import * as Styled from './Button.style';

export function Button(props) {
  const { type, onClick, children, version, size, isDisabled, ...delegated } = props;
  return (
    <Styled.Button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      version={version}
      size={size}
      {...delegated}
    >
      {children}
    </Styled.Button>
  );
}

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  isDisabled: false,
  size: 'MEDIUM',
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
};
