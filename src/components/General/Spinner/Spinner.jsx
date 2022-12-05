import { PropTypes } from 'prop-types';
import CircleLoader from 'react-spinners/CircleLoader';

const overrideSpinner = {
  display: 'block',
  margin: '0 auto',
};

export function Spinner({ size, ...delegated }) {
  return (
    <CircleLoader
      aria-label="Loading Spinner"
      size={size}
      cssOverride={overrideSpinner}
      {...delegated}
    />
  );
}

Spinner.defaultProps = {
  size: 100,
};

Spinner.propTypes = {
  size: PropTypes.number,
};
