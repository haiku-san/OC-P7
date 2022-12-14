import data from "../utils/logements.json"
import React, {createContext} from "react"
export let Context = createContext()

export default function Provider({children}) {
    return (
        <Context.Provider value={{data}}>
            {children}
        </Context.Provider>
    )
}