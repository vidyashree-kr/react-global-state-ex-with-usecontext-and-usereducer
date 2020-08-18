import React, { useState, useReducer, useContext } from "react";
import * as Reducer from "../store/hooks_state/hooks_reducer";
import * as ACTIONS from "../store/actions/actions";
import Context from "../utils/context";

const HooksContainer1 = (props) => {
  
  const contextP = useContext(Context);
  const [value, setvalue] = useState(0);
  const [state, dispatch] = useReducer(
    Reducer.HooksReducer,
    Reducer.initialState
  );
  
  const handleIncrement = () => {
    setvalue(value + 1);
  };
  const handleDecrement = () => {
    setvalue(value - 1);
  };
  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success());
  };
  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };

  return (
    <div>
      <h1>React Hooks</h1>
      <button onClick={() => handleIncrement()}>
        local state Increment
      </button>{" "}
      {value}
      <button onClick={() => handleDecrement()}>local state Increment</button>
      <br />
      <button onClick={() => handleDispatchTrue()}>Dispatch True</button>{" "}
      {state.stateprop1 ? "it is True" : "it is False"}
      <h3>  {contextP.userGlobalStateSubmit ? contextP.userGlobalStateSubmit : "No value"}</h3>
      <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
      <br />
      <button onClick={() => contextP.addGlobalValue()}>
        Global state Increment
      </button>{" "}
      {contextP.globalStateValue}
      <button onClick={() => contextP.decGlobalValue()}>
        Global state Increment
      </button>
      <br />
      <button onClick={() => contextP.dispatchContextTrue()}>Dispatch True</button>{" "}
      {contextP.reducerGlobalState ? "it is True" : "it is False"}
      <button onClick={() => contextP.dispatchContextFalse()}>Dispatch False</button>
    </div>
  );
};
export default HooksContainer1;
