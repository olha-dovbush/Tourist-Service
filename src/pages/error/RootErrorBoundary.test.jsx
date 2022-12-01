import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Layout } from '../../components/layout/Layout/Layout';
import { RootErrorBoundary } from './RootErrorBoundary';

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

describe('RootErrorBoundary', () => {
  test('Renders RootErrorBoundary correctly', async () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/something went terribly wrong/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/try again/i);
  });
});
