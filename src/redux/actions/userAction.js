import { createAction } from "@reduxjs/toolkit";

const login = createAction ('login' ,(data) => {
    return{
        payload:data
    }
})

export const logout = createAction('logout', () => {
    localStorage.removeItem('token')
    return{
        payload: {}
    }
})

export {
    login,
    
}