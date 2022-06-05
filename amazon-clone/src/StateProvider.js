// We are using react context Api for this , it is something similar to redux

import React, {createContext, useContext, useReducer} from "react";

//prepare the data layer

export const StateContext=createContext();

// Wrap our app and provide the Data Layer
export const StateProvider=({reducer,initalState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initailState)}>{children}</StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue=() => useContext(StateContext);