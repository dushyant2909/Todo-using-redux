// s-1 configure store
import { configureStore } from '@reduxjs/toolkit';

//Store must have knowledge of reducers created as it is a restricted store
// Means it can only update values taken by reducers which are defined in int
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})