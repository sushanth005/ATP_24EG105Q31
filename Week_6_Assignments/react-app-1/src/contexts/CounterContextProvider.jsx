import {createContext} from 'react'
import { useState } from 'react';

export const counterContextObj=createContext();

function ContextProvider({children}) 
{
    //state
    const [counter,setCounter]=useState(0);

    //function to increase counter state
    const incrementCounter=()=>{
        setCounter(counter+1);
    }

    //function to decrease counter state
    const decrementCounter=()=>{
        setCounter(counter-1);
    }
    return (
        <counterContextObj.Provider value={{counter,incrementCounter,decrementCounter}}>
            {children}
        </counterContextObj.Provider>
    )
}

export default ContextProvider