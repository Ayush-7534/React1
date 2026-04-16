// import { useState } from "react";    // no need with reducer
import { useContext, useReducer } from "react";
import { GlobalContext, UserContext, LangContext } from "./context";

//2. create reducer function
function reducer(state,action){
    switch(action.type){
        case "TOGGLE_THEME":
            return{...state , theme:state.theme === "light"?"dark":"light",
            }

        case "SET_USER":
            return{
                ...state , user:action.payload,
            }
            
        case "SET_LANG":
            return{
                ...state , lang:action.payload,
            }

        default:
            return state;
    }
}


const Appprovider = ({ children }) => {
// Updated with reducer
    // 1. create common state object

    const initialState={
        theme:"light",
        user:{name:"guest"},
        lang:"en"
    }

    // const [theme, setTheme] = useState("light");
    // const [user, setUser] = useState({ name: "guest" });
    // const [lang, setLang] = useState("en");


    //3. create a single state object
    const [state, dispatch] = useReducer(reducer, initialState);



    // const toggleTheme = () => {
    //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
    // };

    return (
        
            <GlobalContext.Provider value={{ state , dispatch}}>
                {children}
            </GlobalContext.Provider>
    );
};

export default Appprovider;

