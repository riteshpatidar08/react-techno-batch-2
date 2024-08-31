//NOTE step1 
import { createContext } from "react";

//NOTE step2 
export const DataContext = createContext()

//NOTE step3
export const DataProvider = ({children}) => {
console.log(children) ;

const data = "hello this is coming from context"

    return <DataContext.Provider value={{data}}>
{children}
    </DataContext.Provider>
}