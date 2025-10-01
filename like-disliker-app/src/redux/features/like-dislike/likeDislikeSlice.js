import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes: 0,
    dislikes: 0
}

const likeDislikeSlice=  createSlice({
    name: 'likeDislike',
    initialState,
    reducers: {
        increaseLikes: (state) => {
            state.likes += 1;
        },
        increaseDislikes: (state) => {
            state.dislikes += 1;
        },
        resetLikeDislike: (state) => {
            state.likes = 0;
            state.dislikes = 0;
        }
    }
})

export const {increaseLikes, increaseDislikes, resetLikeDislike} = likeDislikeSlice.actions;
export default likeDislikeSlice.reducer;