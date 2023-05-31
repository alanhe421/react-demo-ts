import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move',
};

const DraggableBox = ({  left, top, hideSourceOnDrag }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [left, top]);

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
      <div ref={drag} style={{ ...style, left, top }}>
        Drag me around
      </div>
  );
};

export default DraggableBox;
