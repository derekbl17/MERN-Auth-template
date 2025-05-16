import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name: 'auth',
    initialState:{
        userInfo:null
    },
    reducers:{
        setCredentials: (state,action)=>{
            state.userInfo=action.payload;
        },
        clearCredentials: (state)=>{
            state.userInfo=null;
        }
    }
});

export const {setCredentials,clearCredentials}=authSlice.actions;

export default authSlice.reducer