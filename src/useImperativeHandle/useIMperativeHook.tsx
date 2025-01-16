import { useRef } from 'react';
// import ImperativeHandelChildHook, { ResetCounter } from './childHook';
import ImpartiveChildComponent, { ResetCounter } from '../useImperativeHandle/childHook';



const ImperativeHandelHook = () => {
  const counterRef = useRef<ResetCounter>(null);

  const reset = () => {
     counterRef.current?.reset()
 };

  return (
    <>
      <div className="border p-2">
        <h3 className="border-bottom">useInperativeHandle</h3>
        <ImpartiveChildComponent ref={counterRef} />
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};



export default ImperativeHandelHook;
