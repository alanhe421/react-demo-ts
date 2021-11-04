import React from 'react';

const ModalContainer = function <T>({ name, onChange }: { name: T; onChange: (name: T) => void }) {
  return <>
    <h1>
      hello world
    </h1>
    <div>
      my name is {{ name }}
    </div>
  </>;
};

const Modal = React.forwardRef(ModalContainer);

function UserPage() {
  return <Modal name={'hello'} onChange={(name) => {
    console.log(name);
  }
  }/>;
}
