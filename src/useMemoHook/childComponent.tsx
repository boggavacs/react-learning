import { memo } from 'react';
import { Person } from './mainMemo';

const MemoChildComponent = (userName: Person) => {
  const { name } = userName;
  console.log('Child component rendered');
  return (
    <>
      <div className="border p-2">
        <h3>Child component</h3>
        {name}
      </div>
    </>
  );
};

export default memo(MemoChildComponent);
