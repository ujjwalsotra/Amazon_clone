// We are using react context Api for this , it is something similar to redux

import React, {createContext, useContext, useReducer} from "react";
import reducer, {initialState} from './reducer';
//prepare the data layer

export const StateContext=createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({children}) =>{

    const state = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    );
}

//Pull information from the data layer
export const useStateValue=() => useContext(StateContext);