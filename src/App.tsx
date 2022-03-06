import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { SayHoc } from './say-hoc';

const Say = SayHoc({ boss: 'L' });

function App() {
  const sayRef = useRef<any>();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Say name={'2121'} ref={sayRef}/>
        <button onClick={() => {
          sayRef.current?.say();
        }}>
          say alert
        </button>
      </header>
    </div>
  );
}

export default App;
