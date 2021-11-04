import React, { ReactElement, Ref } from 'react';

const ModalContainer = function <T>({ name, onChange }: { name: T; onChange: (name: T) => void }, ref: Ref<any>) {
  return <>
    <h1>
      hello world
    </h1>
    <div>
      my name is {{ name }}
    </div>
  </>;
};
// const Modal = React.forwardRef(ModalContainer);

/**
 * @see https://coderedirect.com/questions/329183/react-with-typescript-generics-while-using-react-forwardref
 */
const Modal = React.forwardRef(ModalContainer) as
  <T>(p: { name: T; onChange: (name: T) => void } & { ref?: Ref<any> }) => ReactElement;

function UserPage() {
  return <Modal name={'hello'} onChange={(name) => {
    console.log(name);
  }
  }/>;
}
