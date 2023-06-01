import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  zIndex: 222
};

const DraggableBox = ({left, top, hideSourceOnDrag}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'box',
    item: {left, top},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [left, top]);

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag}/>;
  }

  return (
      <div style={{...style, left, top, position: 'absolute'}}>
        <div className={'header'} ref={drag} style={{
          cursor: 'move',
        }}>
          Drag me around header
        </div>
        <div className={'body'}>
          Drag me around body
        </div>
      </div>

  );
};

export default DraggableBox;
