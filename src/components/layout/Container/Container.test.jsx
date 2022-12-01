import { screen, render } from '@testing-library/react';
import { Container } from './Container';
import { containerWidth } from '../../../common/constants/style.constants';

describe('Container Component', () => {
  test('renders correctly without props', () => {
    render(
      <Container>
        <article>Article</article>
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveStyle({ maxWidth: containerWidth });
  });

  test('renders correctly with props', () => {
    render(
      <Container size="800px">
        <article>Article</article>
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveStyle({ maxWidth: '800px' });
  });
});
