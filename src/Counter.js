import { useReducer } from "react";

const initialState = 0;
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      state;
  }
  return state;
};

// const handleIncrease = () => {
//   ;
// };

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <div className="App">
        <h1 className="title">{state}</h1>
        <div className="space">
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          >
            Increase
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
