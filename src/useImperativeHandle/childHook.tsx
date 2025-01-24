import { forwardRef, Ref, useImperativeHandle, useState } from 'react';

interface ChildProps {};

export interface ResetCounter {
  reset: () => void;
};

const ImpartiveChildComponent = (props: ChildProps, ref:Ref<ResetCounter>) => {
  const [count, setCount] = useState(0);
  const {} = props;

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    reset
  }));

  const incrementCounter = () => { setCount(count + 1) };
  const decrementCounter = () => { setCount(count - 1) };


  return (
    <>
      <div className="border p-2">
        <h3 className="border-bottom">useInperativeHandleChild</h3>
        <p>{count}</p>
        <button className="btn btn-primary" onClick={incrementCounter}>
          -
        </button>
        <button className="btn btn-primary m-2" onClick={decrementCounter}>
          +
        </button>
      </div>
    </>
  );
};

export default forwardRef(ImpartiveChildComponent);
