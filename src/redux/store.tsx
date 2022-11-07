import { configureStore } from "@reduxjs/toolkit";
import typingSpeedSlice from "./typingSpeedSlice"

export const store = configureStore({
    reducer: {
        typingSpeed: typingSpeedSlice,
    }
})

export type RootState = ReturnType<typeof store.getState> 
