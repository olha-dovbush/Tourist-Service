import { Link } from 'react-router-dom';
import { Button } from '../../../General/Button';

import * as Styled from '../Header.style';

export function AuthorizationButtons() {
  return (
    <Styled.AuthorizationWrapper>
      <Styled.Login to="/">Login</Styled.Login>
      <Link to="/">
        <Button version="Primary" size="Small">
          Sign up
        </Button>
      </Link>
    </Styled.AuthorizationWrapper>
  );
}
