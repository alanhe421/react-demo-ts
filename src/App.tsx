import React, { useRef, useEffect } from 'react';
import './App.css';
import { SayHoc } from './say-hoc';
import { Terminal } from 'xterm';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableBox from "./drag-box";
import DropContainer from "./drop-container";

const Say = SayHoc({boss: 'L'});

function App() {
  const sayRef = useRef<any>();
  const [position, setPosition] = React.useState({x: 800, y: 300});
  const handleDrop = (left: number, top: number) => {
    console.log('handleDrop', left, top);
    setPosition({x: left, y: top});
  };
  useEffect(() => {
    const term = new Terminal();
    const elementById = document.getElementById('terminal');
    if (!elementById) return;
    term.open(elementById);
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    return () => term.clear();
  }, []);


  return (
      <>

        <DndProvider backend={HTML5Backend}>
          <DropContainer handleDrop={handleDrop}>
            <div className="App" id={'terminal'}>
            </div>
            <DraggableBox left={position.x} top={position.y} hideSourceOnDrag={true}/>
          </DropContainer>
        </DndProvider>
      </>
  );
}

export default App;
