import { createReducer } from "@reduxjs/toolkit";
import { filterByName, load } from "../actions/ciudadesAction";


const inicialState ={
    allCities: [],
    filtered: [] 
    
}

const reducer = createReducer (inicialState, (builder) => {
    builder.addCase(load, (state, action) =>{
        /*const copiaState = {...state }  
        copiaState.allCities = action.payload
        copiaState.filtered = action.payload 
        return copiaState*/
        return {...state, all: action.payload, filtered: action.payload}

    }).addCase (filterByName, (state,action) => {

        const aux = state.all.filter((ciudad)=>{
        return ciudad.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()) }
        )
       return {...state, filtered: aux} 
    })
 })


export default reducer
