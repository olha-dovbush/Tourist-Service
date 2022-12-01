import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header Component', () => {
  test('renders Header correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    screen.debug();
    // expect(screen.getAllByRole('link')).toHaveLength(5);
    // expect(screen.getByRole('img', { name: 'logo' })).toHaveAttribute('src', 'logo.png');
  });
});
