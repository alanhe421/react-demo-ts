import React, { useRef, useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import TerminalPage from './terminal';
import Home from './home';

const router = createBrowserRouter([
  {
    path: '/terminal',
    element: <TerminalPage/>,
  },
  {
    path: '/',
    element: <Home/>,
  },
]);

function App() {
  return <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>;
}

export default App;
