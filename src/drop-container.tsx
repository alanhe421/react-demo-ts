import React from 'react';
import { useDrop } from 'react-dnd';

const style: React.CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'relative',
};

const DropContainer = ({handleDrop, children}) => {
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item: any, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      handleDrop(item.id, left, top);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), []);

  return (
      <div ref={drop} style={style}>
        {isOver && (
            <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 255, 0, 0.3)',
                }}
            />
        )}
        {children}
      </div>
  );
};

export default DropContainer;
