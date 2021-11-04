import React, { ReactElement, Ref, useImperativeHandle, useRef } from 'react';

type ModalHandle = {
  sayHello: () => void;
}

const ModalContainer = function <T>({
  name,
  onChange,
}: { name: T; onChange: (name: T) => void }, ref: Ref<ModalHandle>) {
  useImperativeHandle(ref, () => ({
    sayHello: () => alert(name),
  }));
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
  const modalRef = useRef<ModalHandle>();
  return <>
    <Modal name={'hello'} onChange={(name) => {
      console.log(name);
    }
    } ref={modalRef}/>
    <button onClick={() => modalRef.current?.sayHello()}> click it</button>
  </>;
}
