import React, {createContext} from "react"
export let Context = createContext()

export default function Provider({children}) {
    let string = "abcd"
    return (
        <Context.Provider value={{string}}>
            {children}
        </Context.Provider>
    )
}