

import {configureStore} from "@reduxjs/toolkit"
import hospitalReducer from "./HospitalSlice";
const appStore=configureStore({
    reducer:{
        hospital:hospitalReducer,
    }
})
export default appStore;

