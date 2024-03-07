import { useValueContext } from "../../Context/ContextProvider";

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
  const { currentOperand } = useValueContext();

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

