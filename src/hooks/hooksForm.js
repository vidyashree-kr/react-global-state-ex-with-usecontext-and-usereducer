import React, { useState, useReducer, useContext } from "react";
import * as UserReducer from "../store/hooks_state/user_input_hook_reducer";
import * as ACTIONS from "../store/actions/actions";
import Context from '../utils/context'

const hooksForm = (props) => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const context=useContext(Context)
  // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userState, userDispatch] = useReducer(
        UserReducer.UserReducer,
        UserReducer.initialState
      );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valueChange, setValueChange] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valueSubmit, setValueSubmit] = useState(null);

  const handleValueChange = (event) => {
    setValueChange(event.target.value);
  };
  const handleValueSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.useState.value);
  };
  const userReducerChange = (event) => {
    userDispatch(ACTIONS.user_inpuchange(event.target.value));
  };
  const userReducerSubmit = (event) => {
    event.preventDefault();
    userDispatch(ACTIONS.user_inputsubmit(event.target.useReducer.value));
  };
  return (
    <div>
      <form onSubmit={(e) => handleValueSubmit(e)}>
        <input id="useState" type="text" onChange={(e) => handleValueChange(e)}></input>
        <button type="submit">Submit</button>
      </form>
      <h2>React UseState</h2>
      <p>Value change:{valueChange}</p>
      <p>Value submit:{valueSubmit}</p>
      <br />
      <form onSubmit={(e) => userReducerSubmit(e)}>
        <input id="useReducer" type="text" onChange={(e) => userReducerChange(e)}></input>
        <button type="submit">Submit</button>
      </form>
      <h2>React UseReducer</h2>
      <p>Value change:{userState.user_text_change}</p>
      <p>Value submit:{userState.user_text_submit}</p>
      <br />
      <form onSubmit={(e) => context.userSubmitFormGlobal(e)}>
        <input id="useContext" type="text" onChange={(e) => context.userChangeFormGlobal(e)}></input>
        <button type="submit">Submit</button>
      </form>
      <h2>React Global state</h2>
      <p>Value change:{context.userGlobalStateChange}</p>
      <p>Value submit:{context.userGlobalStateSubmit}</p>
    </div>
  );
};
export default hooksForm;
