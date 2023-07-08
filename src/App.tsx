import React, { useRef, useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import TerminalPage from './terminal';
import Home from './home';
import MonacoEditorPage from './monaco-editor';

const router = createBrowserRouter([
  {
    path: '/terminal',
    element: <TerminalPage/>,
  },
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/monaco-editor',
    element: <MonacoEditorPage/>,
  },
]);

function App() {
  return <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>;
}

export default App;
