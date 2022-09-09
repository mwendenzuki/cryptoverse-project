import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    message: [],
    error: ""
}

const fetchMessages = 

const messageSlice = createSlice({
    name: 'message',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.loading = false,
            state.message = action.payload,
            state.error = ""
        })
        builder.addCase(fetchMessages.rejected, (state, action) => {
            state.loading = false,
            state.message = [],
            state.error = action.error.message
        })
    }
})

module.exports = messageSlice.reducer
module.exports.fetchMessages = fetchMessages
