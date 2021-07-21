import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
// Initial state

const InitialState = {
    transactions:[
       { id: 1, text: 'Flower', amount: -2000 },
       { id: 2, text: 'Salary', amount: 300000 },
       { id: 3, text: 'Book', amount: -10000 },
      { id: 4, text: 'Camera', amount: 150000 }
     ]
}

// Create context
export const GlobalContext = createContext(InitialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,InitialState);

    return(<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);

}

