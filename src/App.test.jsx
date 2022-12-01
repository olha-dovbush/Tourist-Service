import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Layout } from './components/layout/Layout/Layout';
import { RootErrorBoundary } from './pages/error/RootErrorBoundary';

test('landing on error page', async () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <RootErrorBoundary />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/error-page'],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('Something went terribly wrong!');
});
