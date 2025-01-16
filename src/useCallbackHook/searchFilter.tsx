import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchFilter() {
  const usersArray: string[] = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'Chris Brown',
    'Jessica Wilson',
    'David Martinez',
    'Sophia Garcia',
  ];
  const [users, setUsers] = useState<string[]>([]); // inital state to hold the user
  const [filteredUsers, setFilteredUsers] = useState<string[]>(usersArray); // state to hold the filtered users
  const inputRef = useRef<HTMLInputElement | null>(null); // input values to be picked
  useEffect(() => {
    setUsers(usersArray);
  }, []);
  // search method handler
  function handelFilter() {
    if (inputRef.current !== null) {
      const fUserList: string[] = users.filter((user) =>
        user.includes(inputRef.current !== null ? inputRef.current.value : '')
      );
      setFilteredUsers(fUserList);
    }
  }

  return (
    <>
      <div className="border p-2">
        <h3 className="border-bottom">useCallback</h3>
        <div>
          <span className="p-2">filter:</span>
          <span className="p-2">
            <input ref={inputRef} onChange={handelFilter} />
          </span>
        </div>
        <ul className="py-0">
          {filteredUsers &&
            filteredUsers.map((name, i) => <li className="py-0" key={i}>{name}</li>)}
        </ul>
      </div>
    </>
  );
}
