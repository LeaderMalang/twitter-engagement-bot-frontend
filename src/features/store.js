import { configureStore } from '@reduxjs/toolkit'
import trendsReducer from './trendsSlice'
import botReducer from './botSlice'

const store = configureStore({
    reducer: {
        bot : botReducer,
        trends: trendsReducer,
    }
})

export default store