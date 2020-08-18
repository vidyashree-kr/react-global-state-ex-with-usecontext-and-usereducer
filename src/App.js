import React, { useState ,useReducer} from "react";
import Routes from "./routes";
import Context from "./utils/context";
import * as Reducer from "./store/hooks_state/hooks_reducer";
import * as UserReducer from "./store/hooks_state/user_input_hook_reducer";
import * as ACTIONS from "./store/actions/actions";

export default function App() {
  const [stateGlobal, setStateGlobal] = useState(0);
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(
    Reducer.HooksReducer,
    Reducer.initialState
  );
  const [stateUserGlobal, dispatchUserGlobal] = useReducer( UserReducer.UserReducer,
    UserReducer.initialState);

  const handleIncGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  };
  const handleDecGlobalState = () => {
    setStateGlobal(stateGlobal - 1);
  };
  const handleGlobalDispatchTrue = () => {
    dispatchContextGlobal(ACTIONS.success());
  };
  const handleGlobalDispatchFalse = () => {
    dispatchContextGlobal(ACTIONS.failure());
  };

  const userGlobalReducerChange = (event) => {
    dispatchUserGlobal(ACTIONS.user_inpuchange(event.target.value));
  };
  const userGlobalReducerSubmit = (event) => {
    event.preventDefault();
    event.persist()
    dispatchUserGlobal(ACTIONS.user_inputsubmit(event.target.useContext.value));
  };
  return (
    <div>
      <Context.Provider
        value={{
          globalStateValue: stateGlobal,
          addGlobalValue: () => handleIncGlobalState(),
          decGlobalValue: () => handleDecGlobalState(),

          reducerGlobalState:stateContextGlobal.stateprop2,
          dispatchContextTrue:()=>handleGlobalDispatchTrue(),
          dispatchContextFalse:()=>handleGlobalDispatchFalse(),

          userGlobalStateChange:stateUserGlobal.user_text_change,
          userGlobalStateSubmit:stateUserGlobal.user_text_submit,
          userChangeFormGlobal:(event)=>userGlobalReducerChange(event),
          userSubmitFormGlobal:(event)=>userGlobalReducerSubmit(event)
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  );
}
