import { useContext } from 'react';
// import { userContext } from '../data-context/dataContext';

import { userContext } from '../data-context/dataContext';

export function ComponentX() {
  const users = useContext(userContext);
  console.log(users);
  return (
    <div className="border p-2">
      <h2 className="border-bottom">useContext</h2>
      {users && users.name}
    </div>
  );
}
