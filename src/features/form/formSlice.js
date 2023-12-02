import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName : '',
    lastName : '',
    status: 'idle'
}

export const formSlice = createSlice({
    name:'form',
    initialState,

    reducers: {

        addCredentials: (state,action) =>{
            console.log("action payload value>>>",action.payload);

            return { ...state, ...action.payload,status:'active'};
        }
    }
});

export const {addCredentials,getCurrentState} = formSlice.actions;

export const selectForm = (state) => state.form;

export default formSlice.reducer;