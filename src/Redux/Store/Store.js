import {configureStore} from "@reduxjs/toolkit"
import details from "./Slice"
export const Store=configureStore({
    reducer:{
        data:details
    }
})