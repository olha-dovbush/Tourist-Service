import { NavigationLink } from '../../Navigation';
import { Icon, Logo } from '../../General';
import { AuthorizationButtons } from './header-components';
import { ReactComponent as SearchSVG } from '../../../assets/icons/home-page/Search.svg';

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
