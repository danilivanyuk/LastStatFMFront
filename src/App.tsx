import './App.css';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './app/views/pages/MainPage';
import { useState } from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: <MainPage />,
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
