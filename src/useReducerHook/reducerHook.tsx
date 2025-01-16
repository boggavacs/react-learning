import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';

interface Actions {
  type: string;
}

interface AppState {
  count: number;
  error: string;
}

const reducer = (state: AppState, action: Actions) => {
  const { type } = action;
  switch (type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
        error: state.count < 0 ? 'Can not set value less then 0' : '',
      };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: '',
  });

  return (
    <>
      <div className="border p-2">
        <h3 className="border-bottom">useReducer</h3>
        <p>{state && state.count}</p>
        <p>{state && state.error}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ReducerHook;
