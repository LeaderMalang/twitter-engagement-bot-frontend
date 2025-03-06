import { createSlice } from '@reduxjs/toolkit'

const botSlice = createSlice({
    name: 'bot',
    initialState: { isRunning: false },
    reducers: {
        startBot: (state) => { state.isRunning = true },
        stopBot: (state) => { state.isRunning = false }
    }
})

export const { startBot, stopBot } = botSlice.actions
export default botSlice.reducer