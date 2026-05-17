import {create} from "zustand";

//create store
//set funtion always returns an object
//({}) will mean returning an object and not the definition of the function
export const useCounterStore = create((set) => ({
    //state
    newCounter:0,
    //functions to modify the state
    incrementCounter: () => set((state) => ({newCounter: state.newCounter + 1})),
    decrementCounter: () => set((state) => ({newCounter: state.newCounter - 1})),
    reset:()=>set({newCounter:0})
}));
