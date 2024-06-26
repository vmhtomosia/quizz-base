import {  createContext, useReducer } from "react";
import { rootReducer, initialState } from "@/store/app";



export const AppContext = createContext({});

export function AppContextReducer({children } : {children : React.ReactNode}){
  
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return(
        <>
          <AppContext.Provider value={{state, dispatch}}>
            {children}
          </AppContext.Provider>
        </>
    )
}