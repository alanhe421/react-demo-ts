import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { SayHoc } from './say-hoc';
import HeaderMdx from './header.mdx';

const Say = SayHoc({ boss: 'L' });

function App() {
  const sayRef = useRef<any>();
  return (
    <div className="App">
      <HeaderMdx/>
    </div>
  );
}

export default App;
