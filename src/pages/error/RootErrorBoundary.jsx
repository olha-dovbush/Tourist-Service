import { useRouteError } from 'react-router-dom';

import { Container, Spacer, Button } from '../../components';

import ErrorImg from '../../assets/features/ron_weasley_with_broken_wand.jpg';
import * as Styled from './RootErrorBoundary.style';

export function RootErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  function onReloadClick() {
    window.location.href = '/';
  }

  return (
    <Styled.ErrorWrapper>
      <Container>
        <Spacer />
        <Styled.ErrorText>Something went terribly wrong!</Styled.ErrorText>
        <Spacer />
        <Button onClick={onReloadClick} style={{ margin: '0 auto' }}>
          Try again
        </Button>
        <Spacer />
      </Container>
    </Styled.ErrorWrapper>
  );
}
