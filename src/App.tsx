import React, { useRef, useEffect } from 'react';
import './App.css';
import { SayHoc } from './say-hoc';
import { Terminal } from 'xterm';

const Say = SayHoc({ boss: 'L' });

function App() {
  const sayRef = useRef<any>();

  useEffect(() => {
    const term = new Terminal();
    const elementById = document.getElementById('terminal');
    if (!elementById) return;
    term.open(elementById);
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    return () => term.clear();
  }, []);

  return (
    <div className="App" id={'terminal'}>
    </div>
  );
}

export default App;
