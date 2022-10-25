import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import App from './App';
import { ThankYou } from './pages/ThankYou';

TagManager.initialize({
  gtmId: 'AW-623354787'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App />} />,
    <Route path='/obrigado' element={<ThankYou />} />,
  ])
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
