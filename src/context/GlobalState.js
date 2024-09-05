import { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

// Create initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: "Flower",
      amount: -200,
    },
    {
      id: 2,
      text: "Salary",
      amount: 300,
    },
    {
      id: 3,
      text: "Book",
      amount: -20,
    },
  ],
};

// Create new context
export const MyContext = createContext(initialState);

// Create Provider to wrap app
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <MyContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
