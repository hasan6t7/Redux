import { configureStore } from '@reduxjs/toolkit'

import todoReducer from "../redux/features/todos/todoSlice"
import { thunk } from 'redux-thunk'
import { createLogger } from 'redux-logger'

// create a logger middleware
const logger = createLogger()

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger)
})

export default store