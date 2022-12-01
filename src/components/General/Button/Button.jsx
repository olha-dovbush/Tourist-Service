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
  size: 'Medium',
  isDisabled: false,
  onClick: undefined,
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  version: PropTypes.oneOf(['Primary', 'Secondary', 'Gradient', 'Ghost', 'Outline']).isRequired,
  size: PropTypes.oneOf(['Small', 'Medium', 'Big']),
  isDisabled: PropTypes.bool,
};
