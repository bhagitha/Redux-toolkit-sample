import { createSlice } from "@reduxjs/toolkit";
const initialStateValue={ name: "", age: 0, email: "" } 

export const userSlice = createSlice({
  name: "user",
  initialState: { 
    //   value: { 
    //       name: "Bhagi", 
    //       age: 0, 
    //       email: "bhagi@gmail.com" 
    //     } 
    value:initialStateValue
    },
  reducers:{
      login:(state,action)=>{
        state.value=action.payload;
      },
      logout:(state,action)=>{
          state.value=initialStateValue
      }
  }
});

export const {login}=userSlice.actions
export const {logout}=userSlice.actions


export default userSlice.reducer