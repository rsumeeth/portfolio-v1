import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
    activeSection: "about"
  };
  
export const activeStateSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        setActiveSection: (state,action) => {

            state.activeSection = action.payload
          },
          decrement: (state) => {

            state.value += 1
          },
      
    },
  });
  

  
  export const { setActiveSection, decrement } = activeStateSlice.actions;
  
  export default activeStateSlice.reducer;
  