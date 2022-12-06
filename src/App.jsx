import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { PagesLayout } from './components';
import { HomePage, ErrorPage } from './pages';

import { GlobalStyle } from './GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PagesLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
