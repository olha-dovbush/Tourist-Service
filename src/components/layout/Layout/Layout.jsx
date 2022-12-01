import { Link, Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';

export function Layout() {
  return (
    <>
      <Container />

      <Outlet />
    </>
  );
}
