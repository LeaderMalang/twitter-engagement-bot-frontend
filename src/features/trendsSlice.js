import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTrends = createAsyncThunk('trends/fetchTrends', async () => {
    const response = await
    axios.get('http://jsonplaceholder.typicode.com/posts')
    return response.data.slice(0, 5).map(post => ({
        name: post.title,
        engagements: Math.floor(Math.random() * 1000)
    }))
})

const trendsSlice = createSlice({
    name: 'trends',
    initialState: { trends: [], loading: false},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrends.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTrends.fulfilled, (state, action) => {
                state.trends = action.payload
                state.loading = false
            })
    }
})

export default trendsSlice.reducer