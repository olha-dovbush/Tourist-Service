import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';

export function PagesLayout() {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
}
