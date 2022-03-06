import React, { useImperativeHandle } from 'react';

export function SayHoc({ boss }: { boss: string }) {
  return React.forwardRef((props: any, ref) => {
    return <h1>
      from:{boss} say hello:
      <User ref={ref} {...props}/>
    </h1>;
  });
}


const User = React.forwardRef((props: { name: string }, ref) => {
  useImperativeHandle(ref, () => {
    return ({
      say: () => alert(props.name),
    });
  });
  return <>{props.name}</>;
});
