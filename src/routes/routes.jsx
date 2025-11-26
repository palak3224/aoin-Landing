import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AoinSellerPage from '../pages/Home/Components/AoinSellerPage';
import AoinstorePricing from '../pages/Home/Components/AoinstorePricing';
import Layout from '../component/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/seller',
        element: <AoinSellerPage />,
      },
      {
        path: '/pricing',
        element: <AoinstorePricing />,
      },
    ],
  },
]);

export default router;
