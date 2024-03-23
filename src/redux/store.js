import { configureStore } from "@reduxjs/toolkit";
import ciudades from "./reducers/ciudades";
import userReducer from "./reducers/userReducer";

const store = {
    cities: ciudades,
    user: userReducer
}



export default configureStore({
    reducer: store
        
    
})