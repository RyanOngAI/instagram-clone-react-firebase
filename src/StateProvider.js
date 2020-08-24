import React, { createContext, useContext, useReducer } from "react";

// The data layer
export const StateContext = createContext();

// Build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// How to use it inside a component
export const useStateValue = () => useContext(StateContext);
