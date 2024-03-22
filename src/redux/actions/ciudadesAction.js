import { createAction } from "@reduxjs/toolkit";

export const load = createAction('loadCities', (cities) =>{
    return{
        payload:cities  
    }
} )


/*accion de filtrado*/

export const filterByName = createAction('filterByName', (value) =>{
    return{
        payload: value
    }
})