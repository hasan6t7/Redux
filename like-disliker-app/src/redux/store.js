import { configureStore } from '@reduxjs/toolkit'

import likeDislikeReducer from "../redux/features/like-dislike/likeDislikeSlice"

const store =  configureStore({
  reducer: {
    likeDislike: likeDislikeReducer
  }
})

export default store