import { useRouteError } from 'react-router-dom';

import { Container, Spacer, Button } from '../../components';

import * as Styled from './ErrorPage.style';

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  function onReloadClick() {
    window.location.href = '/';
  }

  return (
    <Styled.ErrorWrapper>
      <Container>
        <Styled.ErrorText>Something went terribly wrong!</Styled.ErrorText>
        <Spacer space={{ mobile: 20, tablet: 20, desktop: 20 }} />
        <Button version="Primary" onClick={onReloadClick} style={{ margin: '0 auto' }}>
          Try again
        </Button>
      </Container>
    </Styled.ErrorWrapper>
  );
}
