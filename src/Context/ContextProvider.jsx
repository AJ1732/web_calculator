import React, { createContext, useContext, useState, useReducer } from 'react'
// import { reducerFunction } from '../components/utils/Reducer';

// ACTIONS
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate',
  CLEAR: "clear",
};

const { ADD_DIGIT, DELETE_DIGIT, CHOOSE_OPERATION, EVALUATE, CLEAR } = ACTIONS

export function reducerFunction (state, { type, payload }) {
  switch (type) {
    case ADD_DIGIT:
      return { 
        ...state,
        currentOperand: `${currentOperand || ''}${payload.children}`,
      };
    default:
      return state;
  };
};



export const ValueContext = createContext(undefined);

export function ContextProvider({ children }) {
  const [value, setValue] = useState(null);
  const [
    { 
      currentOperand,
      previousOperand, 
      operation 
    }, dispatch
  ] = useReducer(reducerFunction, {})


  const valueObject = {
    value,
    setValue,
    // inputValue: () => setTheme(theme === 'light'? 'dark': 'light')
    currentOperand,
    previousOperand, 
    operation,
    dispatch
  }

  return (
    <ValueContext.Provider value={ valueObject }>
      {children}
    </ValueContext.Provider>
  )
}

export const useValueContext = () => useContext(ValueContext);