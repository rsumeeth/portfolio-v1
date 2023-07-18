import { configureStore } from '@reduxjs/toolkit';
import activeState from "../activeSlice"

export const store = configureStore({
  reducer: {
    currentState : activeState
  },
})