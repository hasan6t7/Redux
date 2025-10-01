import { configureStore } from '@reduxjs/toolkit'

import todoReducer from "../redux/features/todos/todoSlice"
import preferencesReducer from '../redux/features/preferences/preferencesSlice'

 const store = configureStore({
  reducer: {
    todos: todoReducer,
    preferences: preferencesReducer
  }
})

export default store