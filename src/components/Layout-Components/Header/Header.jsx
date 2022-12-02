import { NavigationLink } from '../../Navigation/NavigationLink';
import { Icon } from '../../General/Icon';
import { Logo } from '../../General/Icon/Logo/Logo';
import { AuthorizationButtons } from './header-components';
import { ReactComponent as SearchSVG } from '../../../assets/icons/Search.svg';

import * as Styled from './Header.style';

export function Header() {
  return (
    <Styled.Wrapper>
      <Styled.Side>
        <Logo />
      </Styled.Side>

      <Styled.MainNavigation>
        <NavigationLink>Destination</NavigationLink>
        <NavigationLink>Activities</NavigationLink>
        <NavigationLink>Specials</NavigationLink>
      </Styled.MainNavigation>

      <Icon>
        <SearchSVG />
      </Icon>

      <AuthorizationButtons />
    </Styled.Wrapper>
  );
}
