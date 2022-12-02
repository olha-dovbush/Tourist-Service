import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS, WEIGHT } from '../../common/constants/style.constants';

export function NavigationLink({ children }) {
  return (
    <Wrapper>
      <NativeLink>{children}</NativeLink>
      <HoverLink aria-hidden>{children}</HoverLink>
    </Wrapper>
  );
}

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
};

const NativeLink = styled.span`
  display: block;
  font-weight: ${WEIGHT.medium};
  transition: transform 250ms;
`;

const HoverLink = styled.span`
  display: block;
  position: absolute;
  transition: transform 250ms;
  transform: translateY(100%);
  font-weight: ${WEIGHT.bold};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Wrapper = styled(NavLink)`
  display: block;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  font-size: var(--20px);
  line-height: var(--20px);
  color: ${COLORS.OxfordBlue};
  width: 138px;

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      ${HoverLink} {
        transform: translateY(0);
      }
      ${NativeLink} {
        transform: translateY(-100%);
      }
    }
  }
  // TODO
  // &.active {
  //   color: ${COLORS.LightSeaGreen};
  // }
`;
