import { useEffect, useState } from 'react';
import MemoChildComponent from './childComponent';

export default function UseMemoHook() {
  
  const [userName, setUserName] = useState<Person>({});
  const [number, setNumber] = useState(0);

  const handelIncrease = () => {
    setNumber(number + 1);
  };

  const handelDecrease = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    setUserName({ name: 'Some Person' });
  } ,[]);

  return (
    <>
      <div className="border p-2">
        <h3 className="border-bottom">useMemo</h3>
        {/* Parent component ('number' is a veriable) */}
        <p>{number && number}</p>
        <button className="btn btn-primary m-2" onClick={handelIncrease}>
          +
        </button>
        <button className="btn btn-primary" onClick={handelDecrease}>
          -
        </button>
        {/* Child component will not render when the parent's component number value is changed. when incremented or decremented. */}
        <MemoChildComponent {...userName} />
      </div>
    </>
  );
}

export interface Person {
  name?: string;
}
