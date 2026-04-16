import { useContext, useState } from "react";
import { GlobalContext, UserContext, LangContext } from "./context";

const App = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {theme,user,lang} = state;

  return (
    <div>
      <h2>Theme: {state.theme}</h2>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle
      </button>

      <h2>User: {state.user.name}</h2>
      <button
        onClick={() =>
          dispatch({ type: "SET_USER", payload: { name: "Ayush" } })
        }
      >
        Change User
      </button>

      <h2>Lang: {state.lang}</h2>
      <button onClick={() => dispatch({ type: "SET_LANG", payload: "hi" })}>
        Change Lang
      </button>
    </div>
  );
};

export default App;

