import { createSlice } from '@reduxjs/toolkit'

const botSlice = createSlice({
    name: 'bot',
    initialState: { 
        isRunning: false,
        status: 'Idle',
        error: null,
        lastAction: null
    },
    reducers: {
        startBot: (state) => {
            state.isRunning = true
            state.status = 'Running'
            state.error = null
            state.lastAction = 'Bot Started'
        },
        stopBot: (state) => {
            state.isRunning = false
            state.status = 'Stopped'
            state.error = null
            state.lastAction = 'Bot Stopped'
        },
        updateStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
            state.isRunning = false
            state.status = 'Error'
            state.lastAction = 'Error Occurred'
        },
        logAction: (state, action) => {
            state.lastAction = action.payload
        }
    }
})

export const { startBot, stopBot, updateStatus, setError, logAction } = botSlice.actions
export default botSlice.reducer
