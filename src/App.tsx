import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ComponentX } from './useContextHook/components/componentf';
import { userContext } from './useContextHook/data-context/dataContext';
import { User } from './useContextHook/data-context/dataContext';
import SearchFilter from './useCallbackHook/searchFilter';
import UseMemoHook from './useMemoHook/mainMemo';
import ReducerHook from './useReducerHook/reducerHook';
import ImperativeHandelHook from './useImperativeHandle/useIMperativeHook';

function App() {
  const [user] = useState<User>({
    id: 1,
    name: 'Context Hook...',
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            left side
          </div>
          <div className="col-10">
            <userContext.Provider value={user}>
              <br />
              <ComponentX />
              <br />
              <SearchFilter />
              <br />
              <UseMemoHook />
              <br />
              <ReducerHook />
              <br />
              <ImperativeHandelHook />
            </userContext.Provider>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
