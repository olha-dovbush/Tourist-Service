import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { Layout } from './components/layout/Layout/Layout';
import { RootErrorBoundary } from './pages/error/RootErrorBoundary';
import { Home } from './pages/home/Home';

import { GlobalStyle } from './GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
