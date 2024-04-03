import { createSlice } from "@reduxjs/toolkit";
import arrobj from "./Details.json"
export const Slice=createSlice({
    name:'table',
    initialState:{
        logdate:arrobj.date,
        logmonth:arrobj.month,
        logyear:arrobj.year,
        profile:"Abinaya",
        signup:false,
        signtolog:false,
        logtohome:false,
        arr:arrobj.profile,
        frd:arrobj.closefrd,
        postarr:[],
        id:3,
        defaultpost:arrobj.post
    },

    reducers:{
        handlearr:(state,action)=>{
        state.arr=action.payload
    },
    handleprofile:(state,action)=>{
    state.profile=action.payload
    },
    handlesign:(state,action)=>{
    state.signup=action.payload
    },
    handlesigntolog:(state,action)=>{
    state.signtolog=action.payload
    },
    handlelogtohome:(state,action)=>{
        state.signtolog=action.payload
        },
    handlepost:(state,action)=>{
        state.postarr=action.payload
    },
    handledefaultpost:(state,action)=>{
        state.defaultpost=action.payload
    },
    handleid:(state,action)=>{
        state.id=action.payload
    }
}
})

export default Slice.reducer
export const {handlearr,handleprofile,handlesign,handlesigntolog,
    handlelogtohome,handlepost,handledefaultpost,handleid}=Slice.actions